<template>
  <img alt="Vue logo" src="/src/assets/logo.png" />

  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <composition />
</template>

<script>
import composition from './CompositionAPI/Template.vue'

export default {
  name: 'HelloWorld',
  components: {
    composition,
  },
  props: {
    msg: {
      type: String,
      default: 'msg text',
    },
  },
  data() {
    return {
      count: 0,
    }
  },
  created() {
    const a = {}
    console.log(a?.b ?? `will done`)
  },
}
</script>
