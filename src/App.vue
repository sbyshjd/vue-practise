<template>
  <div id='app'>
    <h2>AAAAAA</h2>
    <p>{{message}}</p>
    <p>{{count}}</p>
    <button @click="plusClick">+</button>
    <button @click="minusClick">-</button>
    <hello-vuex></hello-vuex>
    <!-- <router-link to='/home'>home papge</router-link>
    <router-link to='/about'>about page</router-link> -->
    <!-- not create everytime -->
    <keep-alive exclude='Profile,User'>
      <router-view></router-view>
    </keep-alive>
    
    <button @click="homeClick">home click</button>
    <button @click="aboutClick">about click</button>
    <button @click="userClick">go to user page</button>
    <button @click="profileClick">go to profile page</button>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex';


export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      userId: 'lisi',
      message: 'This is the message from App.data',
      count:0
    }
  },
  methods: {
    plusClick() {
      this.count ++
    },
    minusClick() {
      this.count --
    },
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
    },
    profileClick() {
      // this.$router.push('/about').catch(err => {})
      let profilePath = {
        path: '/profile',
        query: {
          name: 'zhangsan',
          age: 18,
          height:1.88
        }
      }
      this.$router.push(profilePath).catch(err => {})
      console.log('profile click')
    }
  }
}
</script>

