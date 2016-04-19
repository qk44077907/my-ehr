import Vue from 'vue'
import App from './App.vue'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import VueRouter from 'vue-router'
import ConfigRouter from "./router"

Vue.use(VueRouter);
Vue.config.debug = true;


const router = new VueRouter({
  history: true,
  linkActiveClass  : "active"
})

sync(store, router)
ConfigRouter(router)
router.redirect({
  // 重定向任意未匹配路径到 /home
  '*': '/home'
});
router.start(Vue.extend(App), '#root')

window.router = router
