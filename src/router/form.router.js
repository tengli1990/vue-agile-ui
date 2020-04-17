export default [
  {
    path: '/sample/form/item',
    name: '表单-FormItem 输入框',
    component: () => import('@/sample/form/form-item.sample')
  },
  {
    path: '/sample/form/textarea',
    name: '表单-Textarea 文本框',
    component: () => import('@/sample/form/text-area.sample')
  },
  {
    path: '/sample/form/radio',
    name: '表单-Radio 单选框',
    component: () => import('@/sample/form/radio.sample')
  },
  {
    path: '/sample/form/checkbox',
    name: '表单-Checkbox 多选框',
    component: () => import('@/sample/form/checkbox.sample')
  },
  {
    path: '/sample/basic/switch',
    name: '表单-Switch 开关',
    component: () => import('@/sample/basic/switch.sample')
  },
  {
    path: '/sample/basic/stepper',
    name: '表单-Stepper 步进器',
    component: () => import('@/sample/basic/stepper.sample')
  }
]
