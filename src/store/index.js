import Vue from 'vue'
import Vuex from 'vuex'

//install the plugin
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter:1000,
        students:[
            {id:110,name:'why',age:18},
            {id:111,name:'Kobe',age:21},
            {id:112,name:'Curry',age:10},
            {id:113,name:'Lebron',age:25},
        ]
        
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    },
    actions: {

    },
    getters: {
        powerCounter: state => state.counter*state.counter,
        OlderThan20Stus: state => state.students.filter(s => s.age >= 20),
        OlderThan20StusNum: (state,getters) => getters.OlderThan20Stus.length,
        moreThanAge:(state) => {
            return function(age) {
                return state.students.filter(s => s.age > age )
            }
        }
    },
    modules: {

    }
})

export default store