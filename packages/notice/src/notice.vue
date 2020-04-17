<template>
  <div class="m-notice" :class="[initClass,setAttr]" :style='setNoticeStyle' v-if="visible">
    <div class="m-notice-left">
      <dk-icon v-if="icon" class="m-notice-icon" :name="icon"></dk-icon>
    </div>
    <div class="m-notice-content">
      <slot>{{text}}</slot>
    </div>
    <div class="m-notice-right">
      <span class="m-notice-close" v-if='close' @click="onClose()">
        <agile-icon name="close"></agile-icon>
      </span>
    </div>
  </div>
</template>

<script>
import Icon from '../../icon'
export default {
  components: {
    [Icon.name]: Icon
  },
  name: 'agile-notice',
  props: {
    type: {
      type: String,
      default: 'warning' // warning  danger
    },
    text: {
      type: String,
      default: ''
    },
    align: {
      type: String,
      default: 'left'
    },
    close: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    fill: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      visible: true
    }
  },
  computed: {
    initClass () {
      return {
        'has-close': this.close,
        'is-round': this.round
      }
    },
    setAttr () {
      return {
        ['align-' + this.align]: true,
        ['type-' + this.type]: true
      }
    },
    setNoticeStyle () {
      return {
        background: this.fill,
        color: this.color
      }
    }
  },
  methods: {
    onClose () {
      this.visible = false
    }
  }

}

</script>
