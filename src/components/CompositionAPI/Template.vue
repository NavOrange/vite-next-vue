<template>
  <button @click="increment">
    Count is: {{ state.count }}, double is: {{ state.double }}
  </button>

  <pre><!--
     -->Mouse position x: {{ x }}
<!--      -->Mouse position y: {{ y }}
  </pre>
</template>

<script>
import { useCount } from './Part02'
import { useMousePosition } from './Part03'

export default {
  setup() {
    const { /* count, double, */ state, increment } = useCount()
    const { x, y } = useMousePosition()

    return {
      /* count, double, */
      state,
      increment,
      x,
      y,
    }
  },
  mounted() {
    console.log('template is mounted!')
  }
}
</script>
