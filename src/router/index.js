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
            component: () => import("../pages/about/About.vue"),
            children: [
                {
                    path: "/about/aboutCompany",
                    component: () => import("../pages/about/AboutCompany.vue")
                },
                {
                    path: "aboutTeam",
                    component: () => import("../pages/about/AboutTeam.vue")
                }
            ]
        }
    ]
})
