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
                    "icon"  : "face",
                    "secondlist" : [
                        { name : "员工信息", param:{path:"/employee"} ,icon:"list"},
                        { name : "新建职员",param:{path:"/addEmploree"} ,icon:"add"},
                        { name : "考勤管理",param:{path:"/attent"},icon:"schedule"}
                    ]
                },
                {
                    "name" : "部门管理",
                    "icon" :"equalizer",
                    "secondlist" : [
                        { name : "部门信息", param:{path:"/dept"},icon:"list" },
                        { name : "新建部门",param:{path:"/addDept"} ,icon:"add" },
                    ]
                },
                {
                    "name" : "用户管理",
                    "icon" : "person",
                    "secondlist" : [
                        { name : "用户列表", param:{path:"/user"},icon:"list"},
                        { name : "新建用户",param:{path:"/addUser"},icon:"add" }
                    ]
                }
            ]
        }

    }
}