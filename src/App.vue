<template>
  <nav class="app__nav">
    <router-link v-for="{ path, meta } in routes" :key="path" :to="path">
      {{ meta.title }}
    </router-link>
  </nav>

  <router-view />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { routes } from '/src/router'

export default {
  name: 'App',
  /* components: {
    HelloWorld
  } */
  computed: {
    routes() {
      return routes
    },
  },
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
