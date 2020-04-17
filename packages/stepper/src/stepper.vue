<template>
  <div class="m-stepper" :class="disabledClass">
    <div class="m-stepper-reduce" :class="setBtnReduceClass" @click="handleComputed(-1)"></div>
    <div class="m-stepper-number">
      <input type="tel" :readonly='readonly' v-model="currentValue" @input="handleInput" />
    </div>
    <div class="m-stepper-add" :class="setBtnAddClass" @click="handleComputed(1)"></div>
  </div>
</template>

<script>
const COMPONENT_NAME = 'dk-stepper'
export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: 15
    },
    step: {
      type: [Number, String],
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value,
      reduceStop: this.value <= this.min,
      addStop: this.value >= this.max
    }
  },
  computed: {
    disabledClass () {
      return {
        disabled: this.disabled
      }
    },
    setBtnAddClass () {
      return {
        stop: this.addStop
      }
    },
    setBtnReduceClass () {
      return {
        stop: this.reduceStop
      }
    }
  },
  watch: {
    value (newVal) {
      this.currentValue = newVal
      this.initStatus()
    }
  },
  methods: {
    initStatus () {
      this.addStop = false
      this.reduceStop = false
      if (this.currentValue >= this.max) {
        this.currentValue = this.max
        this.addStop = true
      } else if (this.currentValue <= this.min) {
        this.currentValue = this.min
        this.reduceStop = true
      }
    },
    handleComputed (action) {
      if ((action > 0 && this.addStop) || (action < 0 && this.reduceStop) || this.disabled) {
        return
      }
      this.currentValue = +this.currentValue + action * this.step
      this.initStatus()
      this.$emit('input', this.currentValue) // 触发 input 事件，并传入新值
    },
    handleInput (event) {
      let value = event.target.value.replace(/\D*/g, '')
      if (!value || +value <= this.min) {
        this.reduceStop = true
        this.currentValue = this.min
      } else if (+value >= this.max) {
        this.addStop = true
        this.currentValue = this.max
      } else {
        this.currentValue = +value
        this.addStop = false
        this.reduceStop = false
      }
      this.$emit('input', this.currentValue) // 触发 input 事件，并传入新值
    }
  }
}

</script>
