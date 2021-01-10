/* eslint-disable no-unused-vars */
import { h } from 'vue'
/* eslint-enable */

export default (props, { emit }) => {
  /**
   * v-model            prop => modelValue  event => update:modelValue
   * v-model:password   prop => password    event => update:password
   */
  return [
    <input type="text" value={props.modelValue} onInput={e => emit('update:modelValue', e.target.value)} />,
    <input type="text" value={props.password} onInput={e => emit('update:password', e.target.value)} />,
  ]
}
