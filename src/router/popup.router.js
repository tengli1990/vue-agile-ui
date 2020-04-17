export default [
  {
    path: '/sample/popup/popup',
    name: '弹出层-Popup 弹出层',
    component: () => import('@/sample/popup/popup.sample')
  },
  {
    path: '/sample/popup/dialog',
    name: '弹出层-Dialog 确认框',
    component: () => import('@/sample/popup/dialog.sample')
  },
  {
    path: '/sample/popup/toast',
    name: '弹出层-Toast 提示框',
    component: () => import('@/sample/popup/toast.sample')
  },
  {
    path: '/sample/popup/picker',
    name: '弹出层-Picker 滑动选择器',
    component: () => import('@/sample/popup/picker.sample')
  }
]
