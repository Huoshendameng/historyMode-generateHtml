// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'zepto'
import FastClick from 'fastclick';
Vue.config.productionTip = false
Vue.prototype.$axios = axios;
// FastClick.attach(document.body);
/* eslint-disable no-new */
Vue.use(VueScroller);
try {
    window.FastClick && window.FastClick.attach(document.body)
} catch (e) {
    if (typeof window.errorReport === 'function') {
        window.errorReport({
            'logLevel': 'FATAL',
            'logData': '缺少FastClick',
            'errorFileName': ''
        })
    }
}
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//main.js里面的代码
// router.beforeEach((to, from, next) => {
//     /* 路由发生变化修改页面title */
//     if (to.meta.title) {
//         document.title = to.meta.title
//     }
//     next()
// })


