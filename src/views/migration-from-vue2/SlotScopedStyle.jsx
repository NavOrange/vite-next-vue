export default (props, { slots /* , attrs, emit */ }) => (
  <div>{slots.default()}</div>
)
