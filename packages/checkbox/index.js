import Checkbox from './src/index.vue'
import CheckboxGroup from './src/group.vue'

Checkbox.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
}
CheckboxGroup.install = function (Vue) {
  Vue.component(CheckboxGroup.name, CheckboxGroup)
}
export {
  Checkbox,
  CheckboxGroup
}
