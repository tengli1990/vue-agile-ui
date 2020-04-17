import FormItem from './src/form-item.vue'
import FormGroup from './src/group.vue'
FormItem.install = function (Vue) {
  Vue.component(FormItem.name, FormItem)
}
export {
  FormItem,
  FormGroup
}
