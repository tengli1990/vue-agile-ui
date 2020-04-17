/* eslint-disable eqeqeq */
<template>
<transition name="fade" >
  <div class="m-picker" v-show="visible"  @click.self="maskClick()">
    <transition name="slide-bottom" >
    <div class="m-picker-panel" v-show="visible">
      <div class="m-picker-choose">
        <span class="cancel" @click.self='cancel'>取消</span>
        <span class="confirm" @click.self="confirm">确定</span>
        <h1 class="m-picker-title">{{this.getInfo.title}}</h1>
        <!--  {{this.lastIndex}} {{getValue}} -->
      </div>
      <div class="m-picker-content">
        <div class="mask-top"></div>
        <div class="mask-bottom"></div>
        <div class="wheel-wrapper" ref="wheelWrapper">
          <div class="wheel" v-for="(item, index) in pickerData" :key="'wheel'+index">
            <ul class="wheel-scroll">
              <li class="wheel-item" v-for="(wheel, idx) in item" :key="index+'-wheel-item-'+idx" v-html="wheel.name"></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="picker-footer"></div>
    </div>
    </transition>
  </div>
  </transition>
</template>

<script>
import BScroll from 'better-scroll'
import { format } from 'fecha'
import { dateData } from './data/date.js'
const EMPTY_HTML = '<span class="invalid">暂无信息</span>'

const DEFAULT_FORMATS = {
  datetime: 'YYYY-MM-DD HH:mm:ss',
  date: 'YYYY-MM-DD',
  month: 'YYYY-MM',
  year: 'YYYY',
  time: 'HH:mm:ss'
  // week: 'yyyywWW',
  // timerange: 'HH:mm:ss',
  // daterange: 'YYYY-MM-DD',
  // monthrange: 'YYYY-MM',
  // datetimerange: 'YYYY-MM-DD HH:mm:ss'

}
export default {
  name: 'dk-picker',
  props: {
    value: null,
    options: {
      type: [Array, Object]
    },
    cols: {
      type: [Number, String],
      default: ''
    },
    title: String,
    sign: String,
    type: {
      type: String,
      default: 'select'
    },
    valueFormat: {
      type: String,
      default: 'date'
    }
  },
  data () {
    return {
      visible: false,
      wheels: [],
      pickerIndex: [],
      pickerData: [],
      lastIndex: []
    }
  },
  watch: {
    options: {
      handler (newVal, oldVal) {
        console.log('watch')
        this.updateData()
      },
      immediate: true
    }
  },
  computed: {
    isDateClass () {
      return DEFAULT_FORMATS[this.type]
    },
    getInfo () {
      let cols = this.cols
      if (!cols) {
        switch (this.type) {
          case 'datetime':
            cols = 6
            break
          case 'date':
            cols = 3
            break
          case 'month':
            cols = 2
            break
          case 'time':
            cols = 3
            break
          default :
            cols = 1
            break
        }
      }
      return {
        title: this.title,
        cols: cols,
        sign: this.sign
      }
    },
    getValue () {
      let currentValue = this.value
      let ret
      // if (this.type === 'date') {
      //   if (!currentValue) {
      //     currentValue = format(new Date(), this.valueFormat)
      //   }
      //   return currentValue.split('-').map(item => {
      //     return {
      //       value: item
      //     }
      //   })
      // }
      if (this.isDateClass) {
        if (!currentValue) {
          currentValue = format(new Date(), DEFAULT_FORMATS[this.valueFormat] || this.valueFormat)
        }
        switch (this.valueFormat) {
          case 'datetime':

            break
          case 'date':
          case 'month':
            ret = currentValue.split('-').map(item => {
              return {
                value: item
              }
            })
            break
          case 'time':

            break
        }
      }
      return ret || currentValue
    }

  },
  methods: {
    updateData () {
      const initData = this._getterData()
      console.log('initData', initData)
      this.pickerIndex = initData.index
      this.pickerData = initData.data
      this.lastIndex = initData.index
    },
    show () {
      this.updateData()
      this.visible = true
      if (!this.wheels.length) {
        this.$nextTick(() => {
          const wheelWrapper = this.$refs.wheelWrapper
          this.pickerData.forEach((item, index) => {
            this._createWheel(wheelWrapper, index).enable()
          })
        })
      } else {
        this.wheels.forEach((wheel, index) => {
          wheel.wheelTo(this.pickerIndex[index])
          wheel.enable()
        })
      }
    },
    maskClick () {
      this._hide()
    },
    cancel () {
      this._hide()
    },
    confirm () {
      const isInTransition = this.wheels.some((wheel) => {
        return wheel.isInTransition
      })
      if (isInTransition) {
        return
      }

      const filterRet = function (value) {
        value.forEach(item => {
          if (item.children) {
            delete item.children
          }
        })
        return value
      }

      let selectedValue = filterRet(this._getCurrentValue())

      let confirmDate

      if (this.isDateClass) {
        switch (this.valueFormat) {
          case 'datetime':

            break
          case 'date':
          case 'month':
            confirmDate = selectedValue.map((item, index) => {
              return item.value
            }).join('/')
            break
          case 'time':

            break
        }

        selectedValue = format(new Date(confirmDate), DEFAULT_FORMATS[this.valueFormat] || this.valueFormat)
      }
      this.$emit('input', selectedValue)
      this.$emit('confirm', {value: selectedValue, sign: this.sign})
      this._hide()
    },
    _createWheel (wheelWrapper, i) {
      const wheel = this.wheels[i] = new BScroll(wheelWrapper.children[i], {
        wheel: {
          selectedIndex: this.pickerIndex[i] || 0,
          rotate: 25,
          adjustTime: 300
        },
        // flickLimitTime: 1000,
        swipeTime: 1500
      })
      const setData = (j) => {
        for (let idx = i; idx < this.pickerData.length - 1; idx++) {
          const item = this.pickerData[idx][idx === i ? j : 0]

          if (item.children && item.children.length) {
            this.$set(this.pickerData, idx + 1, item.children)
          } else {
            this.$set(this.pickerData, idx + 1, [{
              value: '',
              name: EMPTY_HTML
            }])
          }
          if (!item) {
            break
          }
        }
      }

      wheel.on('scrollEnd', () => {
        let j = wheel.getSelectedIndex()
        if (this.lastIndex[i] === j) {
          return
        } else {
          this.lastIndex[i] = j
        }

        setData(j)
        this.wheels.forEach((item, index) => {
          if (index > i) {
            item.scrollTo(0, 0, 500)
          }
        })
      })
      return this.wheels[i]
    },
    _destroyExtraWheels () {
      const dataLength = this.pickerData.length
      if (dataLength < this.wheels.length) {
        const extraWheels = this.wheels.splice(dataLength)
        extraWheels.forEach((wheel) => {
          wheel.destroy()
        })
      }
    },
    _hide () {
      this._destroyExtraWheels()
      this.wheels.forEach((wheel) => {
        wheel.disable()
      })
      this.visible = false
      setTimeout(() => {
        this.wheels = []
        this.pickerIndex = []
        this.pickerData = []
        this.lastIndex = []
      }, 200)
    },
    _getCurrentValue () {
      const value = []
      this.wheels.forEach((wheel, i) => {
        const j = wheel.getSelectedIndex()
        value.push(this.pickerData[i][j])
      })
      return value
    },
    _getterData () {
      const initOptions = []

      const pickerIndex = []
      const manyCols = {}
      const repeatCalc = (opt, idx) => {
        if (this.getInfo.cols <= idx) {
          return
        }
        if (!opt) {
          opt = [{'value': '', 'name': EMPTY_HTML}]
        }
        manyCols[idx] = []
        manyCols[idx + 1] = []
        opt.forEach((item, index) => {
          manyCols[idx].push(item)
          let nextIdx = idx + 1
          let nextLen = manyCols[nextIdx].length
          // if (!manyCols[nextIdx].length) {
          //   pickerIndex[idx] = 0
          //   manyCols[nextIdx] = item.children && item.children.length ? item.children : [{'value': '', 'name': EMPTY_HTML}]
          //   repeatCalc(manyCols[nextIdx], nextIdx)
          // }
          // eslint-disable-next-line eqeqeq
          if (!nextLen || (this.getValue[idx] && this.getValue[idx].value == item.value)) {
            manyCols[nextIdx] = item.children && item.children.length ? item.children : [{'value': '', 'name': EMPTY_HTML}]
            pickerIndex[idx] = !nextLen ? 0 : index
            repeatCalc(manyCols[nextIdx], nextIdx)
          }
        })
      }

      // if (this.type === 'date') {
      //   repeatCalc(JSON.parse(JSON.stringify(dateData)), 0)
      // } else {
      //   repeatCalc(JSON.parse(JSON.stringify(this.options)), 0)
      // }

      switch (this.type) {
        case 'datetime':

          break
        case 'date':
        case 'month':
          repeatCalc(JSON.parse(JSON.stringify(dateData)), 0)
          break
        case 'time':

          break
        default:
          repeatCalc(JSON.parse(JSON.stringify(this.options)), 0)
          break
      }

      for (let i = 0; i < this.getInfo.cols; i++) {
        initOptions.push(manyCols[i])
      }
      return {
        data: initOptions,
        index: pickerIndex
      }
    }
  }
}
</script>
