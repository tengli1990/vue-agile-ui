<template>
  <div class="m-form-item" :class="[initFormItemClass]">
    <div class="m-form-item-content">
      <label class="m-form-item-label" v-if="title">
        {{ title }} <span class="sub-title">{{ subTitle }}</span>
      </label>
      <div class="m-form-item-right" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="m-form-item-control">
        <input class="m-form-input" :class="[align]" :type="type" :placeholder="placeholder" :disabled="disabled"
          :readonly="readonly" :maxlength="maxlength" autocomplete="off" v-model.trim="inputValue" @focus="inputFocus()"
          @blur="inputBlur()" @input="onInput($event)" />
      </div>
      <div class="m-form-item-right" v-if="hasRightContent">
        <i v-if="clearable && isFocus && inputValue" class="clear-input dkfonts icon-close-solid"
          @click="clearInput()"></i>
        <slot>{{unit}}</slot>
      </div>
    </div>
    <div class="m-form-item-children">
      <div class="m-form-item-brief" v-if="brief">{{ brief }}</div>
    </div>
  </div>
</template>

<script>
const INPUT_TYPE_DIGIT = 'digit'
const INPUT_TYPE_MONEY = 'money'
const INPUT_TYPE_TEL = 'tel'
const INPUT_TYPE_TEXT = 'text'
export default {
  name: 'agile-form-item',
  inject: {
    rootField: {
      default: null
    },
    rootGroup: {
      default: null
    }
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: INPUT_TYPE_TEXT
    },
    fixed: {
      type: [Number, String],
      default: 0
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: [String],
      default: ''
    },
    maxlength: {
      type: [String, Number]
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    align: {
      type: String,
      default: 'left'
    },
    isHighlight: {
      type: Boolean,
      default: false
    },
    unit: {
      type: String,
      default: ''
    },
    isLatent: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    brief: {
      type: String
    },
    border: {
      type: Boolean,
      default: false
    },
    toFixed: {
      type: [Number, String],
      default: 2
    }
  },
  model: {
    prop: 'value',
    event: 'write'
  },

  data () {
    return {
      inputValue: this.value.toString(),
      isFocus: false
    }
  },
  computed: {
    initFormItemClass () {
      return {
        'is-focus': this.isFocus,
        'is-highlight': this.isHighlight,
        'is-latent': this.isLatent,
        'is-disabled': this.disabled,
        'has-value': this.value,
        'has-boder': this.border,
        'in-field': !!this.rootField
      }
    },
    inputType () {
      let inputType = this.type
      let telType = [INPUT_TYPE_DIGIT, INPUT_TYPE_MONEY]
      if (telType.includes(inputType)) {
        return INPUT_TYPE_TEL
      }
      return inputType
    },
    getFixed () {
      return this.toFixed
    },
    hasRightContent () {
      return this.$slots.default || (this.clearable && this.isFocus && this.inputValue) || this.unit
    }
  },
  watch: {
    value (newVal) {
      this.inputValue = newVal
      // let ret = newVal
      // // if (this.type === 'digit' || this.type === 'money') {
      // //   ret = +newVal
      // // }
      // this.inputValue = ret
      // this.$emit('write', ret)
    }
  },
  methods: {
    clearInput () {
      this.inputValue = ''
    },
    inputFocus () {
      this.isFocus = true
    },
    inputBlur () {
      if (this.type === INPUT_TYPE_MONEY) {
        this.inputValue = this.inputValue.replace(/\.$/g, '')
        this.inputValue = this.inputValue.replace(/^\.\d+/g, function (c, m) {
          return m + c
        })
      }
      setTimeout(() => {
        this.isFocus = false
      })
    },
    onInput (event) {
      if (this.type === INPUT_TYPE_DIGIT) {
        // digit
        this.inputValue = this.inputValue.replace(/\D*/g, '')
      } else if (this.type === INPUT_TYPE_MONEY) {
        // money
        if (this.inputValue.includes('.')) {
          const reg = new RegExp(`\\d*[.](\\d{0,${this.getFixed}})`, 'gim')
          this.inputValue = this.inputValue.match(reg)[0]
        } else {
          this.inputValue = this.inputValue.replace(/\D*/g, '')
        }
      } else {
        // text
        this.inputValue = event.target.value
      }
      this.$emit('write', this.inputValue)
    }
  }
}

</script>
