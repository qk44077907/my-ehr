/**
 * Created by  on 2016/3/30.
 */
export  default  function(router){
    router.map({
        '/employee': {
            name : "employee",
            component: require('./components/employee.vue')
        },
        '/page2': {
            name : "page2",
            component: require('./components/page2.vue')
        },
        '/home' : {
            name : "home",
            component : require("./components/Home/index.vue")
        }
    })
}