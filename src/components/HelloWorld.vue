<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

  <composition />
</template>

<script>
import composition from './CompositionAPI/Template.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    composition,
  },
  data() {
    return {
      count: 0
    }
  },
  created() {
    const a = {}
    console.log(a?.b ?? `will done`)
  }
}
</script>
