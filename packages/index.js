import './theme/index.less'
import utils from './utils'
import './utils/extend'
import CommonFn from './utils/common'
import rem from './utils/rem'

/** @module 基础组件 */
import {
  Button,
  ButtonGroup
} from './button'
import Icon from './icon'
import CellItem from './cell-item'
import DetailItem from './detail-item'
import Switch from './switch'
import Steps from './steps'
import Tag from './tag'
import Notice from './notice'

/**
 * @module 表单层组件
 * */
import {
  FormItem,
  FormGroup
} from './form-item'
import TextArea from './textarea'
import Stepper from './stepper'
import Radio from './radio'
import {
  Checkbox,
  CheckboxGroup
} from './checkbox'

/**
 * @module 弹出层组件
 * */
import Popup from './popup'
import {
  Spinner,
  Loading
} from './loading'

/**
 * @module 布局组件
 * */
import Layout from './layout'
import Navigation from './navigation'
import Field from './field'
import {
  List,
  ListColumn
} from './list'
import View from './view'

/**
 * @module 搜索组件
 * */

/**
 * @module 弹出选择
 * */
import {
  Picker
} from './picker'

/**
 * @module 脚本方法
 */
import Dialog from './dialog'
import Toast from './toast'

// const version = '1.0.0'
const components = [
  Navigation,
  Button,
  ButtonGroup,
  Icon,
  Switch,
  Field,
  Popup,
  CellItem,
  DetailItem,
  FormItem,
  FormGroup,
  TextArea,
  Radio,
  Steps,
  Tag,
  Notice,
  Checkbox,
  CheckboxGroup,
  Stepper,
  View,
  Layout,
  List,
  ListColumn,
  Picker,
  Spinner,
  Loading
]
const install = function (Vue, config = {}) {
  if (config.rem) {
    rem(window, document)
  }

  if (install.installed) {
    return false
  }
  // components.forEach(Component => {
  //   Vue.component(Component.name, Component)
  // })
  components.forEach(Component => {
    if (config.prefix) {
      Component.name = Component.name.replace(/^agile/, config.prefix)
    }
    Vue.component(Component.name, Component)
  })

  // 注册全局函数方法
  for (let key in CommonFn) {
    Vue.prototype[key] = CommonFn[key]
  }
}

const VueAgileUi = {
  /* eslint-disable no-undef */
  install
}

components.forEach((Component) => {
  const name = utils.processComponentName(Component, {
    firstUpperCase: true
  })
  VueAgileUi[name] = Component
})

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
};

export default VueAgileUi

export {
  Navigation,
  Button,
  ButtonGroup,
  Icon,
  Switch,
  Field,
  Popup,
  CellItem,
  DetailItem,
  FormItem,
  FormGroup,
  TextArea,
  Radio,
  Steps,
  Tag,
  Notice,
  Checkbox,
  CheckboxGroup,
  Stepper,
  View,
  Layout,
  List,
  ListColumn,
  Picker,
  Spinner,
  Loading,
  Dialog,
  Toast
}
