<template>
  <div class="m-dialog px-dialog" v-show="visibleBox">
    <dk-popup v-model='visible' @close='dialogCallback' :radius='radius' :hasMask='hasMask' :animation='animation'
      :maskClosable='maskClosable'>
      <div class="m-dialog-box">
        <div class="m-dialog-title" v-if="title">{{title}}</div>
        <div class="m-dialog-content">{{content}}</div>
        <div class="m-dialog-button">
           <button class="cancel" @click="dialogCallback('cancel')">{{cancelText}}</button>
           <button class="confirm" @click="dialogCallback('confirm')">{{confirmText}}<span v-if="confirmCountDown">{{this.confirmCountDown}}</span></button>
        </div>
      </div>
    </dk-popup>
  </div>
</template>
<script>
import Popup from '../../popup'
export default {
  components: {
    [Popup.name]: Popup
  },
  name: 'agile-dialog',
  data () {
    return {
      visible: false,
      visibleBox: false,
      confirmText: '',
      cancelText: '',
      content: '',
      closable: false,
      hasMask: true,
      radius: '0',
      confirmCountDown: 0,
      maskClosable: false,
      animation: 'fade-up',
      title: '',
      transition: '',
      // 辅助参数
      countDownTimer: null,
      boxTimer: null
    }
  },
  watch: {
    $route (val) {
      console.log('路由变化')
    }
  },
  methods: {
    init () {
      this.countDown()
    },
    countDown () {
      if (!this.confirmCountDown) {
        return
      }
      this.countDownTimer = setInterval(() => {
        --this.confirmCountDown
        if (!this.confirmCountDown) {
          clearInterval(this.countDownTimer)
        }
      }, 1000)
    },
    dialogCallback (action) {
      if (action === 'confirm' && this.confirmCountDown) {
        return
      }
      this.visible = false
      this.callback(action)
      this.boxTimer = setTimeout(() => {
        this.visibleBox = false
      }, 300)
    }
  }
}

</script>
