/**
 * Created by  on 2016/3/30.
 */
export  default  function(router){
    router.map({
        '/home': {
           name : "home",
           component : require("./components/Home/index.vue")
        },
        '/employee': {
            name : "employee",
            component: require('./components/Employee/index.vue')
        },
        '/dept': {
            name : "dept",
            component: require('./components/Dept/index.vue')
        },
        '/user' : {
            name : "user",
            component : require("./components/User/index.vue")
        }
    })
}