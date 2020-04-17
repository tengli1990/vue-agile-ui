
export default {
  camelize (str) {
    str = String(str)
    return str.replace(/-(\w)/g, function (m, c) {
      return c ? c.toUpperCase() : ''
    })
  },
  kebab (str) {
    str = String(str)
    return str.replace(/([A-Z])/g, '-$1').toLowerCase()
  },
  processComponentName (Component, { prefix = '', firstUpperCase = false } = {}) {
    const name = Component.name
    const pureName = name.replace(/^dk-/i, '')
    let camelizeName = `${this.camelize(`${prefix}${pureName}`)}`
    if (firstUpperCase) {
      camelizeName = camelizeName.charAt(0).toUpperCase() + camelizeName.slice(1)
    }
    return camelizeName
  }
}
