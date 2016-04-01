import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ConfigRouter from "./router"
Vue.use(VueRouter);
Vue.config.debug = true;


const router = new VueRouter({
  history: true,
  linkActiveClass  : "active"
})

ConfigRouter(router)
router.start(Vue.extend(App), '#root')
window.router = router
