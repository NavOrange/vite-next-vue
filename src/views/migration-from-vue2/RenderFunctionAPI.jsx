/* eslint-disable */
import { h, defineComponent, reactive } from 'vue'

export const RenderFunctionAPIRender = defineComponent({
  render() {
    return h('div', null, 'render')
  },
})

export const RenderFunctionAPISetupWithRender = defineComponent({
  setup(props, { slots, attrs, emit }) {
    const state = reactive({
      count: 0,
    })

    function increment() {
      state.count++
    }

    return () => h('button', { onClick: increment }, state.count)
  },
})

export const CustomDirective = {
  beforeMount(el, binding, vnode, prevVnode) {},
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {}, // 新
  unmounted() {},
}

/**
 * @param {import('vue').SetupContext} context
 */
export const CustomDirectiveTemplate = (props, context) => {
  // return <h1 onVnodeMounted={(...args) => console.log(JSON.stringify(args, null, 2))}>CustomDirective</h1>

  return [
    <p onVnodeMounted={() => console.log('p vnode mounted hook')}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati
      voluptas exercitationem architecto eum doloribus quae soluta tenetur eius,
      nulla quis commodi explicabo nam consectetur dignissimos? At harum ut
      debitis!
    </p>,
    <h1 onVnodeMounted={(...args) => console.log(JSON.stringify(args, null, 2))}>CustomDirective</h1>,
    <p onVnodeMounted={() => console.log('p vnode mounted hook')}>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque pariatur
      expedita deserunt facilis culpa rem possimus, eveniet similique error iure
      recusandae fuga officiis, accusamus quam aperiam magni distinctio nisi
      perspiciatis?
    </p>,
  ]
}
