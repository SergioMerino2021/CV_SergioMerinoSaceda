<template>
  
  <NavBar/>
  <router-view/>
  
</template>

<script>
import HomeView from './views/HomeView.vue';
import NavBar from './components/NavBar.vue';
  
  // @ is an alias to /src
  
  
  export default {
    name: 'Home',
    components: {
    HomeView,
    NavBar
},
  
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
