<template>
  <nav class="app__nav" :class="{ [scheme]: true }">
    <router-link v-for="{ path, meta } in routes" :key="path" :to="path">
      {{ meta.title }}
    </router-link>

    <select v-model="mode">
      <option
        v-for="value in ['light', 'dark', 'auto']"
        :key="value"
        :value="value"
      >
        {{ value }}
      </option>
    </select>
  </nav>

  <router-view />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { routes } from '/src/router'
import usePrefersColorScheme from '/src/components/CompositionAPI/PrefersColorScheme'

export default {
  name: 'App',
  /* components: {
    HelloWorld
  } */
  setup() {
    const { scheme, mode } = usePrefersColorScheme()

    return { routes, scheme, mode }
  },
}
</script>

<style lang="scss">
.app__nav {
  text-align: center;

  > * + * {
    margin-left: 10px;
  }
}
</style>
