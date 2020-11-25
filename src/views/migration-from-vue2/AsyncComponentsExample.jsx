import { ref, defineAsyncComponent, defineComponent } from 'vue'

let AsyncComponents = null

export default defineComponent({
  name: 'AsyncComponentsExample',

  setup() {
    const load = ref(false)
    const hasError = ref(false)

    return { load, hasError }
  },

  computed: {
    visible() {
      return this.load || this.hasError
    },
    btnDisabled() {
      return this.load && !this.hasError
    },
  },

  methods: {
    handleLoad() {
      AsyncComponents = defineAsyncComponent({
        loader: () =>
          new Promise((resolve, reject) =>
            setTimeout(
              () =>
                Math.random() < 0.5
                  ? reject(Error('mock load error'))
                  : import('./AsyncComponents.jsx').then(resolve),
              Math.random() * 500
            )
          ),
        delay: 200,
        timeout: 3000,
        errorComponent: (props, { emit }) => {
          emit('load-error')
          return <code>load error</code>
        },
        loadingComponent: () => <code>loading</code>,
      })

      this.load = true
    },

    handleReset() {
      this.load = false
      this.hasError = false
      AsyncComponents = null
    },
  },

  render() {
    return [
      <button disabled={this.btnDisabled} onClick={this.handleLoad}>
        click to load async component
      </button>,
      <button onClick={this.handleReset}>reset</button>,
      this.visible && (
        <AsyncComponents onLoadError={() => (this.hasError = true)} />
      ),
    ]
  },
})
