/*
 * @Author: Do not edit
 * @Date: 2021-06-05 10:42:28
 * @LastEditors: zhangfuming
 * @LastEditTime: 2021-06-05 16:56:18
 * @Description: Do not Edit
 */
// 导入组件
import amingSvgButton from './aming-svg-button/aming-svg-button'; 

export default {
  install: function (Vue) {
      Vue.component('aming-svg-button', amingSvgButton)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('aming-svg-button', amingSvgButton)
}