import { onBeforeUpdate, onUpdated, defineComponent } from 'vue'

export default defineComponent({
  name: 'ArrayRefsWithComposition',
  setup() {
    let itemRefs = []

    const setItemRefs = (el) => {
      itemRefs.push(el)
    }

    onBeforeUpdate(() => {
      itemRefs = []
    })

    onUpdated(() => {
      console.log(itemRefs)
    })

    return {
      itemRefs,
      setItemRefs,
    }
  },
  render() {
    return Array.from({ length: 3 }).map(() => (
      <div ref={this.setItemRefs}></div>
    ))
  },
})
