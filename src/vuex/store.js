import Vue from 'vue'
import Vuex from 'vuex'
import nav from './modules/nav'
import breadcurmb from "./modules/breadcrumb"
import middlewares from './middlewares'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
  modules: {
    nav,breadcurmb
  },
  strict: debug,
  middlewares
})
