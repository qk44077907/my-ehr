import api from "./../api"
import * as types from './mutation-types'
// 点击二级菜单
export const clickNavSecond = ({ dispatch }, name) => {
    dispatch(types.CLICK_NAV_SECOND, name)
}

// 设置一级导航名称
export const setNavName = ({dispatch},name) =>{
    dispatch(types.SET_NAV_NAME,name)
}
// 设置二级导航名称
export const setSecondName = ({dispatch},name) =>{
    dispatch(types.SET_SECOND_NAME,name)
}

// 获得菜单list
export const getMenuList = ({dispatch}) =>{
    // api.getMenuList().then(reply =>{
    //     if(reply.result){
    //         dispatch(types.INIT_MENU_LIST,reply.result);
    //     }
    // })
    var list = api.getMenuList();
    dispatch(types.INIT_MENU_LIST,list.result);
}