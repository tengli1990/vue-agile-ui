<template>
  <div class="m-text-area">
    <textarea
      :placeholder="placeholder"
      :value='value'
      :disabled="disabled"
      @input="changeInput($event)"
      :maxlength="maxlength"
    ></textarea>
    <div class="m-textarea-tips">
      <span v-if="tipsType==='string'">最多输入{{maxlength}}个字</span>
      <span v-else>{{length + '/'+ maxlength}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'agile-text-area',
  props: {
    placeholder: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    value: {
      default: ''
    },
    maxlength: {
      type: Number,
      default: 200,
      required: false
    },
    tipsType: {
      type: String,
      required: false,
      default: 'Number'
    }
  },
  data () {
    return {
      length: this.value.length
    }
  },
  watch: {
    'value': function (newVal, oldVal) {
      this.length = newVal.length
    }
  },
  methods: {
    changeInput ($event) {
      // console.log('this.lenght', this.length)
      this.$emit('input', $event.target.value)
    }
  }
}
</script>
