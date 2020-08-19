/* eslint-disable */
import { ref, watchEffect } from 'vue'

const count = ref(0)

function increment() {
  count.value++
}

watchEffect(() => {
  console.log(`count is ${count.value}`)
})
