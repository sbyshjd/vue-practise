<template>
    <div>
        <h3>This is the profile page</h3>
        <h3>{{$route.query.name}}</h3>
        <h3>{{$route.query.age}}</h3>
        <h3>{{$route.query.height}}</h3>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    destroyed() {
        console.log('Profile is destroyed!!!!')
    }
    
}
</script>

<style>

</style>