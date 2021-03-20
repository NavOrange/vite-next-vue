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
</template>

<script>
import { routes } from '@/router'
import usePrefersColorScheme from '@/composables/prefersColorScheme'

export default {
  name: 'App',
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
