import { reactive, watchEffect, computed } from 'vue'

const state = reactive({
  count: 0
})

watchEffect(() => {
  document.title = `count is ${state.count}`
})

function increment() {
  state.count++
}

document.body.addEventListener('click', increment)

const double = computed(() => state.count * 2)

watchEffect(() => {
  console.log(double.value)
})
