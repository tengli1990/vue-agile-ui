import Vue from 'vue'
import DialogComponent from './dialog.vue'
const defaultOptions = {
  visible: false,
  visibleBox: false,
  confirmText: '确定',
  cancelText: '取消',
  content: '内容',
  closable: false,
  hasMask: true,
  radius: '.12rem',
  confirmCountDown: 0,
  maskClosable: false,
  animation: 'fade-up',
  title: '',
  transition: '',
  // 辅助参数
  countDownTimer: null
}
const DialogConstructor = Vue.extend(DialogComponent)
let instance, currentMsg

const initInstance = function () {
  instance = new DialogConstructor({
    el: document.createElement('div')
  })
  instance.callback = (action) => {
    return currentMsg.resolve(action)
  }
  instance.$watch('$router')
}

const Dialog = function (options, callback) {
  if (!instance) {
    initInstance()
  }
  clearInterval(instance.countDownTimer)
  clearInterval(instance.boxTimer)
  options = Object.assign({}, defaultOptions, options)
  for (let prop in options) {
    if (instance.hasOwnProperty(prop)) {
      instance[prop] = options[prop]
    }
  }
  if (!instance.visibleBox) {
    document.body.appendChild(instance.$el)
    instance.visible = true
    instance.visibleBox = true
    instance.init()
  }

  return new Promise((resolve, reject) => {
    currentMsg = {
      callback,
      resolve,
      reject
    }
  })
}
export default Dialog
export {
  Dialog
}
