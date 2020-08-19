/* eslint-disable */
import { reactive, computed, toRefs, onMounted } from 'vue'

export function useCount() {
  const state = reactive({
    count: 0,
    double: computed(() => state.count * 2),
  })

  function increment() {
    state.count++
  }

  /* Lifecycle Hooks */
  onMounted(() => {
    console.log('component is mounted!')
  })

  return {
    // ...toRefs(state),
    state,
    increment,
  }
}
