<template>
  <h1>Migration from Vue 2</h1>

  <ul class="feature__list">
    <li>
      <FeatureTeleportOne />
    </li>

    <li>
      <FeatureTeleportTwo />
    </li>

    <li>
      <input v-model="email" type="text" />
      <input v-model="password" type="text" />
      <button @click="emit">submit</button>

      <EmitsComponentOption
        ref="EmitsComponentOption"
        @submit="EmitsComponentOptionSubmit"
      />
    </li>
  </ul>
</template>

<script>
import { FeatureTeleportOne, FeatureTeleportTwo } from './Teleport.jsx'
import EmitsComponentOption from './EmitsComponentOption.jsx'

export default {
  name: 'ViewMigrationFromVue2',
  components: {
    FeatureTeleportOne,
    FeatureTeleportTwo,
    EmitsComponentOption,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    emit() {
      const { email, password } = this
      this.$refs.EmitsComponentOption.submitForm(email, password)
    },
    EmitsComponentOptionSubmit() {
      console.log(arguments)
    },
  },
}
</script>

<style lang="scss">
.feature__list {
  text-align: left;
}
</style>
