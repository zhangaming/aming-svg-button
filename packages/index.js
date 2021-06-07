/*
 * @Author: Do not edit
 * @Date: 2021-06-05 10:42:28
 * @LastEditors: zhangfuming
 * @LastEditTime: 2021-06-07 17:16:44
 * @Description: Do not Edit
 */
// 导入组件
import amingSvgButton from './aming-svg-button/aming-svg-button'; 
import amingSmile from './aming-smile/aming-smile'// 将所有的组件引入进来

const components = [
  amingSvgButton,
  amingSmile
];

// 定义install方法，它将作为export暴露的对象的方法被Vue.use调用
const install = function(Vue){
	// 判断当前组件是否已被安装过，如果已安装过则不再安装
    if(install.installed) return;  
    install.installed = true;
    
    // 遍历components数组，依次注册每个组件
    components.map(component => {
        Vue.component(component.name, component);
    }) 
}

if(typeof window !== 'undefined' && window.Vue){
  install(window.Vue);
}
export default{
  install,
  ...components    //将插件暴露出去，这样可以按需引入
} 


// 开发单个组件 上面开发组件库
// export default {
//   install: function (Vue) {
//       Vue.component('aming-svg-button', amingSvgButton)
//   }
// }

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.component('aming-svg-button', amingSvgButton)
// }