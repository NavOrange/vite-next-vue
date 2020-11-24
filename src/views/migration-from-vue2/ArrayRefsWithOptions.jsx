import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArrayRefsWithComposition',
  data() {
    return {
      itemRefs: [],
    }
  },
  beforeUpdate() {
    this.itemRefs = []
  },
  updated() {
    console.log(this.itemRefs)
  },
  methods: {
    setItemRefs(el) {
      console.log(el)
      this.itemRefs.push(el)
    },
  },
  render() {
    return Array.from({ length: 3 }).map(() => (
      <div ref={this.setItemRefs}></div>
    ))
  },
})
