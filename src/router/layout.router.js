export default [
  {
    path: '/sample/layout/list',
    name: '布局-List 列表布局',
    component: () => import('@/sample/layout/list.sample')
  },
  {
    path: '/sample/layout/field',
    name: '布局-Field 区块布局',
    component: () => import('@/sample/layout/field.sample')
  }
]
