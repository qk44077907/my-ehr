/**
 * Created by  on 2016/4/1.
 */
import {
    SET_NAV_NAME,
    SET_SECOND_NAME
}  from '../mutation-types'

const state  = {
    navName : "",
    secondName : ""
}

// mutations
const mutations = {
    [SET_NAV_NAME] (state, name) {
        state.navName = name;
    },
    [SET_SECOND_NAME] (state, name) {
        state.secondName = name;
    },
}

export  default {
    state,
    mutations
}


