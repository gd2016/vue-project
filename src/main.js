// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import store from './store/'
import FastClick from 'fastclick'
import './config/rem'
Vue.config.productionTip = false

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);//取消移动端点击的300毫秒延迟
    }, false);
}
Vue.use(VueRouter)
const router=new VueRouter({
  routes,
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    return {y:0}// return 期望滚动到哪个的位置
  }
})


new Vue({
  el:"#app",
  router,
  store,
  template: '<App/>',
  components: { App }
})
