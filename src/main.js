// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import showdown from 'showdown'

// import './assets/common/common.less'
// import VueAgileUi from '../packages'
import VueAgileUi from '../lib/vue-agile-ui.min'
import '../lib/vue-agile-ui.min.css'
// import VueAgileUi from 'vue-agile-ui'

Vue.config.productionTip = false

Vue.use(VueAgileUi, {rem: true, prefix: 'dk'})

// 使用md文件
Vue.prototype.md2html = (md) => {
  let converter = new showdown.Converter()
  let text = md.toString()
  let html = converter.makeHtml(text)
  return html
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
