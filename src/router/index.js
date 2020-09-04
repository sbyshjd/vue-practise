import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'
import App from '../App'

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
        component: Home
    },
    {
        path:'/about',
        component: About
    }
]

//create the instance of plugin
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

