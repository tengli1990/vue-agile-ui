import Dialog from '../dialog'
import Toast from '../toast'
export default {
  $dialog: Dialog,
  $toast: Toast
  // $toast: Toast,
  // $unique: function(arr) {
  //   if (!Array.isArray(arr)) {
  //     console.log('type error!')
  //     return
  //   }
  //   return [...new Set(arr)]
  // }
  // $type: function(o, type) {
  //   var s = Object.prototype.toString.call(o)
  //   return s.match(/\[object (.*?)\]/)[1].toLowerCase()
  // }
}
