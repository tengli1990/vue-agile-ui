<template>
  <div class="m-popup" v-show="isVisible">
    <transition name='fade'>
      <div class="m-popup-mask" v-if='hasMask' :style="setMaskStyle" v-show="visible" @click="maskCallback('mask')"></div>
    </transition>
    <transition :name="(position&&'slide-'+position) || animation">
      <div class="m-popup-box" :class="[position]" :style="setPopupBoxStyle" v-show="visible">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'dk-popup',
  props: {
    animation: {
      type: String,
      default: 'bounce'
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: 0.6
    },
    direction: {
      type: String,
      default: '' // centered slide-left slide-right slide-bottom slide-top
    },
    position: {
      type: String,
      default: '' // centered top right bottom left
    },
    radius: {
      type: String,
      default: '0'
    }
  },
  model: {
    prop: 'visible',
    event: 'change'
  },
  data () {
    return {
      isVisible: this.visible,
      delayClose: false
    }
  },
  computed: {
    setMaskStyle () {
      return {
        backgroundColor: `rgba(0,0,0,${this.opacity})`
      }
    },
    setPopupBoxStyle () {
      return {
        borderRadius: this.radius
      }
    }
  },
  watch: {
    visible (newVal) {
      if (newVal) {
        this.isVisible = true
        this.delayClose = true
        setTimeout(() => {
          this.delayClose = false
        }, 500)
      }
    }
  },
  methods: {
    maskCallback (type) {
      if (!this.maskClosable || this.delayClose) {
        return
      }
      this.$emit('change', false)
    }
  }
}

</script>
