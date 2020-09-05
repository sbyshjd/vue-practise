<template>
  <div id='app'>
    <h2>AAAAAA</h2>
    <!-- <router-link to='/home'>home papge</router-link>
    <router-link to='/about'>about page</router-link> -->
    <router-view></router-view>
    <button @click="homeClick">home click</button>
    <button @click="aboutClick">about click</button>
    <button @click="userClick">go to user page</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userId: 'lisi'
    }
  },
  methods: {
    homeClick(){
      // this.$router.push('/home').catch(err => {})
      this.$router.replace('/home').catch(err => {})
      console.log('home click')
    },
    aboutClick() {
      // this.$router.push('/about').catch(err => {})
      this.$router.replace('/about').catch(err => {})
      console.log('about click')
    },
    userClick() {
      // this.$router.push('/about').catch(err => {})
      this.$router.push(`/user/${this.userId}`).catch(err => {})
      console.log('user click')
    }
  }
}
</script>

