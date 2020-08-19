import { ref, onMounted, onUnmounted } from 'vue'

function getScroll() {
  var scrollLeft =
    document.body.scrollLeft || document.documentElement.scrollLeft
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop,
  }
}

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  function update(e) {
    x.value = e.pageX || e.clientX + getScroll().scrollLeft
    y.value = e.pageY || e.clientY + getScroll().scrollTop
  }

  onMounted(() => {
    window.addEventListener('mousemove', update)
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })

  return { x, y }
}
