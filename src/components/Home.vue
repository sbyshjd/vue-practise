<template>
    <div>
        <h3>This is Home page</h3>
        <router-link to="/home/news">news</router-link>
        <router-link to="/home/message">message</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home',
    created() {
        console.log('home is created')
        // console.log(this.$route)
        // document.title = 'home'
    },
    destroyed() {
        console.log('home is destroyed!')
    },
    activated() {
        console.log('home is active!!!!!')
    },
    beforeRouteLeave(to,from,next) {
        console.log(this.$route.path)
        next()
    }

}
</script>

<style>

</style>