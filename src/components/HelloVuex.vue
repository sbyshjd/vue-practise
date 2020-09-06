<template>
    <div>
        <h3>This is the hello vuex page</h3>
        <h3>{{$store.state.counter}}</h3>
        <button @click="addition">+</button>
        <button @click="substract">-</button>
        <h3>{{$store.getters.powerCounter}}</h3>
        <h5>{{$store.getters.OlderThan20Stus}}</h5>
        <h5>{{$store.getters.OlderThan20StusNum}}</h5>
        <h5>{{$store.getters.moreThanAge(9)}}</h5>
        <ul v-if="false">
            <li v-for="s in $store.getters.OlderThan20Stus" :key="s.name">{{s.name}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloVuex',
    methods: {
        addition() {
            this.$store.commit('increment')
        },
        substract() {
            this.$store.commit('decrement')
        }
    }
}
</script>

<style>

</style>