import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

//install the plugin
Vue.use(VueRouter)

//config the mapping of routes

const routes =[
    {
        path:'/',
        redirect: '/home'
    },
    {
        path:'/home',
        //lazy load for routes
        component: () => import('../components/Home.vue'),
        children:[
            {
                path:'/',
                redirect: 'news'
            },
            {
                path:'news',
                component: () => import('../components/HomeNews.vue')
            },
            {
                path:'message',
                component: () => import('../components/HomeMessage.vue')
            }
        ]
    },
    {
        path:'/about',
        component: () => import('../components/About.vue')
    },
    {
        path:'/user/:userId',
        component: () => import('../components/User.vue')
    }
]

//create the instance of plugin
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

export default router

