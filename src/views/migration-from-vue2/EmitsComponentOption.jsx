import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmitsComponentOption',
  emits: {
    // No validation
    click: null,

    // Validate submit event
    submit: ({ email, password }) => {
      if (email && password) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    },

    'my-event': null,
  },
  created() {
    this.$emit('my-event', 'kebab-case 事件名 不存在任何自动化的大小写转换')
  },
  methods: {
    submitForm(email = 'example@domain.com', password = 'password') {
      this.$emit('submit', { email, password })
    },
  },
  render: () => <pre>'Emits ComponentOption' <code>$ref[componentname].submitForm(email?, password?)</code></pre>
})
