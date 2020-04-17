import Vue from 'vue'
import Router from 'vue-router'
import Views from './routers'

Vue.use(Router)

export default new Router({
  routes: [...Views]
})
