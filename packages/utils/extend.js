/* eslint-disable */
Array.prototype.structures = function (object) {
  object = Object.assign({}, object)
  return this.some((obj) => {
    let i = 0
    for (let key in obj) {
      if (obj[key] !== object[key]) {
        i++
        break
      }
    }
    return (i === 0)
  })
}
