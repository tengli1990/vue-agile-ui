export default [
  {
    path: '/sample/basic/button',
    name: '基础组件-Button 按钮',
    component: () => import('@/sample/basic/button.sample')
  },
  {
    path: '/sample/basic/cell-item',
    name: '基础组件-CellItem 列表单元',
    component: () => import('@/sample/basic/cell-item.sample')
  },
  {
    path: '/sample/basic/detail-item',
    name: '基础组件-DetailItem 清单项',
    component: () => import('@/sample/basic/detail-item.sample')
  },
  {
    path: '/sample/basic/icon',
    name: '基础组件-Icon 图标',
    component: () => import('@/sample/basic/icon.sample')
  },
  {
    path: '/sample/basic/notice',
    name: '基础组件-NoticeBar 通知栏',
    component: () => import('@/sample/basic/notice.sample')
  },
  {
    path: '/sample/basic/tag',
    name: '基础组件-Tag 标签',
    component: () => import('@/sample/basic/tag.sample')
  }
]
