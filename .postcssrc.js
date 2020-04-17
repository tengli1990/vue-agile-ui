// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {},
    "postcss-pxtorem": {
      rootValue: 100, // 1rem=100px
      propWhiteList: ['*','!border'],
	    selectorBlackList: ['.px-'] // 过滤掉.px-开头的class，不进行rem转换
    }
  }
}
