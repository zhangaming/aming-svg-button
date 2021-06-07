/*
 * @Author: zhangfuming
 * @Date: 2021-06-05 10:30:23
 * @LastEditors: zhangfuming
 * @LastEditTime: 2021-06-05 10:30:43
 * @Description: Do not Edit
 */
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js,
      template: 'public/index.html,
      filename: 'index.html
    }
  },
  css: {
    extract: false   //强制使用内联样式，这样打包出的插件样式会内置在js中，不需要单独引入
  }
}