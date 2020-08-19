<template>
  <nav class="app__nav">
    <router-link to="/">home</router-link>
    <router-link to="/migration">Migration from Vue 2</router-link>
  </nav>

  <router-view />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  /* components: {
    HelloWorld
  } */
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.app__nav {
  > a + a {
    margin-left: 10px;
  }
}
</style>
