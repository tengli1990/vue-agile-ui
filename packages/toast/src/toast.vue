<template>
  <div class='m-toast' :class="[initClass]">
    <dk-popup v-model="visible" :animation="animation" :opacity="0" :hasMask="hasMask" :maskClosable="false">
       <div class="m-toast-content">
          <div class="text">
            <agile-icon class='icon-left' name="selected" v-if="type==='success'" />
            <agile-icon class='icon-left' name="close-solid" v-if="type==='failed'" />
            <agile-spinner color="light" v-if="type==='loading'" />
            {{content}}
          </div>
       </div>
    </dk-popup>
  </div>
</template>

<script>
import Popup from '../../popup'
import Icon from '../../icon'
export default {
  components: {
    [Popup.name]: Popup,
    [Icon.name]: Icon
  },
  name: 'agile-toast',
  data () {
    return {
      visible: false,
      type: 'info', // info
      animation: 'fade',
      content: '',
      hasMask: false,
      position: 'center',
      multiple: false,
      delayTime: 2500,
      // not options
      timer: null
    }
  },
  computed: {
    initClass () {
      return {
        [`is-${this.type}`]: true,
        [`position-${this.position}`]: true
      }
    }
  },
  methods: {
    init () {
      this.onDelay(this.delayTime, this.hide)
    },
    onDelay (time, callback) {
      if (typeof time === 'function') {
        callback = time
        time = this.delayTime
      }
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        callback && callback()
      }, time)
    },
    stop () {
      clearTimeout(this.timer)
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
