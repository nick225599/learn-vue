// 定义路由规则
import VueRouter from "vue-router";


import HomeVue from '../pages/home/Home.vue'

export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
        {
            path: "/home",
            component: HomeVue
        },
        {
            path: "/about",
            component: () => import("../pages/about/About.vue")
        }
    ]
})
