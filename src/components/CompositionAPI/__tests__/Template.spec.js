import { mount } from '@vue/test-utils'
import Component from '../Template.vue'

describe('Component', () => {
  it('updates text', async () => {
    const wrapper = mount(Component)
    const button = wrapper.find('button')
    expect(button.text()).toContain('0')
    await button.trigger('click')
    expect(button.text()).toContain('1')
  })

  it('mouse move', async () => {
    const wrapper = mount(Component)
    const pre = wrapper.find('pre')
    const mouseMove = new MouseEvent('mousemove', { clientX: 100, clientY: 200 })
    window.dispatchEvent(mouseMove)
    await wrapper.vm.$nextTick()
    expect(pre.text()).toContain('100')
    expect(pre.text()).toContain('200')
  })
})
