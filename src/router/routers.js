
import BasicRouter from './basic.router'
import FormRouter from './form.router'
import PopupRouter from './popup.router'
import DataRouter from './data.router'
import LayoutRouter from './layout.router'

export default [
  ...BasicRouter,
  ...FormRouter,
  ...DataRouter,
  ...PopupRouter,
  ...LayoutRouter
]
