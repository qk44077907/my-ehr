/**
 * Created by  on 2016/4/1.
 */
import {MenuResource} from "./resource";

export default {
    //  获取菜单
    getMenuList : () => {
        return {
            result :[
                {
                    "name" : "职员管理",
                    "secondlist" : [
                        { name : "员工信息", param:{path:"/employee"} },
                        { name : "二级菜单2",param:{path:"/page2"} },
                        { name : "二级菜单3",param:{path:"/home"}}
                    ]
                }
            ]
        }

    }
}