import {
  provide,
  readonly,
  computed,
  ref,
  watchEffect,
  onBeforeMount,
  onUnmounted,
} from 'vue'

export default function usePrefersColorScheme() {
  const scheme = ref('light') // default scheme
  const mode = ref('auto')

  const schemes = ['light', 'dark']
  const MediaQueryLists =
    'matchMedia' in window
      ? schemes.map((scheme) =>
          window.matchMedia(`(prefers-color-scheme: ${scheme})`)
        )
      : []

  function toggleHtmlClass(value) {
    const classList = document.documentElement.classList
    classList.remove(...schemes)
    classList.add(value)
  }

  function getScheme() {
    const index = MediaQueryLists.findIndex(
      (MediaQueryList) => MediaQueryList.matches
    )

    return schemes[index] ?? scheme.value
  }

  function addListener() {
    MediaQueryLists.forEach((MediaQueryList, index) => {
      MediaQueryList.handler = function (event) {
        if (event.matches) scheme.value = schemes[index]
      }
      MediaQueryList.addEventListener('change', MediaQueryList.handler)
    })
  }

  function removeListener() {
    MediaQueryLists.forEach((MediaQueryList) => {
      MediaQueryList.removeEventListener('change', MediaQueryList.handler)
      MediaQueryList.handler = null
    })
  }

  const provideScheme = computed(() => {
    return 'auto' === mode.value ? scheme.value : mode.value
  })

  watchEffect(() => {
    toggleHtmlClass(provideScheme.value)
  })

  onBeforeMount(() => {
    scheme.value = getScheme()
    addListener()
  })

  onUnmounted(() => {
    removeListener()
    MediaQueryLists.length = 0
  })

  provide('scheme', readonly(provideScheme))

  return {
    scheme: provideScheme,
    mode,
  }
}
