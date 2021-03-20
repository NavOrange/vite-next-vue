import { shallowMount } from '@vue/test-utils'
import PrefersColorScheme from '../prefersColorScheme'

describe('PrefersColorScheme', () => {
  const wrapper = shallowMount({
    setup() {
      return PrefersColorScheme()
    },
    render() {
      return `scheme: {{ scheme }} mode: {{ mode }}`
    },
  })

  test('returns scheme and mode', () => {
    expect(typeof wrapper.vm.scheme).toBe('string')
    expect(typeof wrapper.vm.mode).toBe('string')
  })

  test('mode: light', () => {
    wrapper.vm.mode = 'light'
    expect(wrapper.vm.scheme).toBe('light')
  })

  test('mode: dark', () => {
    wrapper.vm.mode = 'dark'
    expect(wrapper.vm.scheme).toBe('dark')
  })

  test('mode: auto', () => {
    wrapper.vm.mode = 'auto'
    expect(wrapper.vm.scheme).toMatch(/^(light|dark)$/)
  })
})
