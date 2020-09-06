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
        meta:{
            title: 'HOME'
        },
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
        meta:{
            title: 'ABOUT'
        },
        component: () => import('../components/About.vue')
    },
    {
        path:'/user/:userId',
        meta:{
            title: 'USER'
        },
        component: () => import('../components/User.vue')
    },
    {
        path: '/profile',
        meta:{
            title: 'PROFILE'
        },
        component: () => import('../components/Profile.vue')
    }
]

//create the instance of plugin
const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

//navigation guard
router.beforeEach((to,from,next) => {
    // console.log(to);
    document.title = to.matched[0].meta.title
    next()
})


export default router

