import { mount } from '@vue/test-utils'
import Component from './HelloWorld.vue'

it('render props', async () => {
  const wrapper = mount(Component)
  wrapper.setProps({ msg: 'test' })
  const h1 = wrapper.find('h1')
  await wrapper.vm.$nextTick()
  expect(h1.text()).toMatch(/test/)
})
