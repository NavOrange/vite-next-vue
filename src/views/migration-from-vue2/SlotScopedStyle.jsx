/* eslint-disable no-unused-vars */
import { h } from 'vue'
/* eslint-enable */

export default (props, { slots /* , attrs, emit */ }) => (
  <div>{slots.default()}</div>
)
