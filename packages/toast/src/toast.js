import Vue from 'vue'
import ToastComponent from './toast.vue'

const defaultOptions = {
  visible: false,
  type: 'info', // info
  animation: 'fade',
  content: '',
  delayTime: 2500,
  hasMask: false,
  position: 'center',
  multiple: false
}

const ToastConstructor = Vue.extend(ToastComponent)

let instance

const initInstance = function () {
  instance = new ToastConstructor({
    el: document.createElement('div')
  })
}
const setComponentAttr = function (args) {
  for (let prop in args) {
    if (instance.hasOwnProperty(prop)) {
      instance[prop] = args[prop]
    }
  }
}

function Toast (options) {
  let params
  if (!instance) {
    initInstance()
    document.body.append(instance.$el)
  }

  if (typeof options === 'object') {
    params = Object.assign({}, defaultOptions, options)
  } else {
    params = defaultOptions
    params.content = String(options)
  }

  setComponentAttr(params)

  instance.visible = true
  if (params.type !== 'loading') {
    instance.init && instance.init()
  } else {
    instance.stop()
  }
}

Toast.loading = function (options) {
  defaultOptions.type = 'loading'
  defaultOptions.hasMask = true
  Toast(options)
}

Toast.info = function (options) {
  defaultOptions.type = 'info'
  defaultOptions.hasMask = false
  Toast(options)
}

Toast.success = function (options) {
  defaultOptions.type = 'success'
  defaultOptions.hasMask = false
  Toast(options)
}

Toast.failed = function (options) {
  defaultOptions.type = 'failed'
  defaultOptions.hasMask = false
  Toast(options)
}

Toast.hide = function () {
  instance.hide()
}

export default Toast

export {
  Toast
}
