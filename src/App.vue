<template>
  <div id='app'>
    <h2>AAAAAA</h2>
    <!-- <router-link to='/home'>home papge</router-link>
    <router-link to='/about'>about page</router-link> -->
    <router-view></router-view>
    <button @click="homeClick">home click</button>
    <button @click="aboutClick">about click</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    homeClick(){
      // this.$router.push('/home')
      this.$router.replace('/home').catch(err => {})
      console.log('home click')
    },
    aboutClick() {
      // this.$router.push('/about')
      this.$router.replace('/about').catch(err => {})
      console.log('about click')
    }
  }
}
</script>

