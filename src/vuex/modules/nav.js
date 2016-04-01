import {
   INIT_MENU_LIST
} from '../mutation-types'


const state = {
    navList :[]
}

// mutations
const mutations = {
  [INIT_MENU_LIST] (state, list) {
      if(list!=null){
          state.navList = list  ;
      }
  }
}

export default {
  state,
  mutations
}
