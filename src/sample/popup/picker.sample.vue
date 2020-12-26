<template>
  <div class="sample-dialog">
    <dk-layout class='sample-button'>
      <dk-navigation slot="header" title="滑动选择器"></dk-navigation>
      <template slot='content'>
        <dk-field title="例子">
           <dk-form-item title="123123" value='11'></dk-form-item>
        </dk-field>
        <dk-field title="例子">
          <dk-button-group class="mt20">
            <dk-button @click='select1("select1Data")'>单列选择器示例1</dk-button>
          </dk-button-group>
          {{select1Data.selected}}
          <dk-button-group class="mt20">
            <dk-button @click='select1("select5Data")'>单列选择器示例5</dk-button>
          </dk-button-group>
          {{select5Data.selected}}
          <dk-button-group class="mt20">
            <dk-button @click='select1("select6Data")'>单列选择器示例6</dk-button>
          </dk-button-group>
          {{select6Data.selected}}
          <dk-button-group class="mt20">
            <dk-button @click='select1("select2Data")'>多级联动示例</dk-button>
          </dk-button-group>
          {{select2Data.selected}}
          <dk-button-group class="mt20">
            <dk-button @click='select1("select3Data")'>日期选择</dk-button>
          </dk-button-group>
          {{select3Data.selected}}
        </dk-field>

      </template>

    </dk-layout>
    <dk-picker
      ref="selectPicker"
      v-model="pickerSelect.selected"
      :title="pickerSelect.title"
      :type="pickerSelect.type"
      :options="pickerSelect.options"
      :sign="pickerSelect.sign"
      :cols="pickerSelect.cols"
      :value-format="pickerSelect.format"
       />
  </div>

</template>

<script>
import cityData from './districts'
export default {
  data () {
    return {
      pickerSelect: {
        cols: 1,
        title: '',
        sign: '',
        options: [],
        selected: []
      },

      select1Data: {
        type: 'select',
        title: '请选择单利数据',
        sign: 'select1Data',
        cols: 1,
        options: [{
          value: 1,
          name: '北京市'
        }, {
          value: 2,
          name: '河北省'
        }, {
          value: 3,
          name: '山西省'
        }, {
          value: 4,
          name: '内蒙古自治区'
        }, {
          value: 5,
          name: '辽宁省'
        }, {
          value: 6,
          name: '吉林省'
        }, {
          value: 7,
          name: '黑龙江省'
        }, {
          value: 8,
          name: '上海市'
        }],
        selected: [{
          'value': 4,
          'name': '内蒙古自治区'
        }]

      },
      select5Data: {
        type: 'select',
        title: '请选择单利数据',
        sign: 'select5Data',
        cols: 1,
        options: [{
          value: 100,
          name: '北京市'
        }, {
          value: 101,
          name: '河北省'
        }, {
          value: 102,
          name: '山西省'
        }, {
          value: 103,
          name: '内蒙古自治区'
        }, {
          value: 104,
          name: '辽宁省'
        }, {
          value: 105,
          name: '吉林省'
        }, {
          value: 106,
          name: '黑龙江省'
        }, {
          value: 107,
          name: '上海市'
        }],
        selected: [{
          'value': 107,
          'name': '内蒙古自治区'
        }]

      },
      select6Data: {
        type: 'select',
        title: '请选择单利数据',
        sign: 'select6Data',
        cols: 1,
        options: [{
          value: 100,
          name: '北京市'
        }, {
          value: 101,
          name: '河北省'
        }, {
          value: 102,
          name: '山西省'
        }, {
          value: 103,
          name: '内蒙古自治区'
        }, {
          value: 104,
          name: '辽宁省'
        }, {
          value: 105,
          name: '吉林省'
        }, {
          value: 106,
          name: '黑龙江省'
        }, {
          value: 107,
          name: '上海市'
        }],
        selected: [{
          'value': 107,
          'name': '内蒙古自治区'
        }]

      },
      select2Data: {
        title: '请选择多列数据',
        sign: 'select2Data',
        cols: 3,
        options: cityData,
        selected: [{
          'value': '820000',
          'name': '澳门特别行政区'
        }]
      },
      select3Data: {
        title: '选择日期',
        format: 'date',
        type: 'month',
        selected: ''

      }
    }
  },
  watch: {
    $route (val) {
      console.log('路由变化')
    }
  },
  mounted () {
    // setTimeout(() => {
    //   this.select1Data.options.push({
    //     value: 9,
    //     name: '湖南省'
    //   })
    //   console.log(this.select1Data.options)
    // }, 2000)
  },
  methods: {
    select1 (name) {
      this.pickerSelect = this[name]
      this.$refs.selectPicker.show()
    }
    // select2 () {
    //   // this.$toast.info('一段文字')
    //   this.$refs.selectPicker.show()
    // }
  }
}
</script>
