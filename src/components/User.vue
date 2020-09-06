<template>
    <div>
        <h3>This is the the user page</h3>
        <h3>{{$route.params.userId}}</h3>
        <h4>{{userId}}</h4>
    </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        userId() {
            // console.log(this.$route)
            return '11111111'
        }
    },
    destroyed() {
        console.log('User is destroyed!!!!')
    }
    
}
</script>

<style>

</style>