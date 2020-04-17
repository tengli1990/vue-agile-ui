<template>
  <div class="m-radio" :class="[setInitClass]" @click='onClick()'>
    <div class="m-radio-left" v-if="$slots['left'] || iconPosLeft || payment">
      <slot name='left'>
        <template v-if="iconPosLeft">
          <dk-icon v-if="isActive" class="selected" name="selected"></dk-icon>
          <dk-icon v-else class="selected" name="unselect"></dk-icon>
        </template>
        <template v-if="payment">
          <dk-icon class="payment" :name="payment" :color="getPaymentTypeColor"></dk-icon>
        </template>
      </slot>

    </div>
    <div class="m-radio-label">
      <p class="m-radio-label-title">{{label}}</p>
      <p class="m-radio-label-brief">{{brief}}</p>
    </div>
    <div class="m-radio-right" v-if="$slots['right'] || iconPosRight">
      <slot name='right'>
        <template v-if="iconPosRight">
          <dk-icon v-if="isActive" class="selected" name="selected"></dk-icon>
          <dk-icon v-else class="selected" name="unselect"></dk-icon>
        </template>
      </slot>
    </div>
  </div>
</template>
<script>
import Icon from '../../icon'
export default {
  components: {
    [Icon.name]: Icon
  },
  name: 'dk-radio',
  props: {
    value: '',
    name: '',
    label: {
      type: String
    },
    brief: {
      type: String,
      default: ''
    },
    inline: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'selected'
    },
    iconPosition: {
      type: String,
      default: 'front' // front | behind
    },
    payment: {
      type: [Boolean, String],
      default: false //  alipay | wechat
    }
  },
  model: {
    prop: 'name',
    event: 'input'
  },
  data () {
    return {
      iconPos: this.setIconPosition()
    }
  },
  computed: {
    setInitClass () {
      return {
        'is-active': this.name === this.value,
        'is-inline': this.inline,
        'no-border': this.noBorder,
        'is-payment': this.payment
      }
    },
    isActive () {
      return this.name === this.value
    },
    iconPosLeft () {
      return this.iconPos === 'front'
    },
    iconPosRight () {
      return this.iconPos === 'behind'
    },
    // 支付图表颜色
    getPaymentTypeColor () {
      const color = {
        alipay: '#3996e2',
        wechat: '#57ce46'
      }
      if (this.payment) {
        return color[this.payment]
      }

      return '#333'
    }
  },
  methods: {
    setIconPosition () {
      if (this.payment) {
        return 'behind'
      }
      return this.iconPosition
    },
    onClick () {
      this.$emit('input', this.value)
    }
  }
}

</script>
