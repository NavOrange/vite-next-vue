/* eslint-disable no-unused-vars */
import { h, Fragment } from 'vue'
/* eslint-enable */

export default (attrs) => {
  return (
    <>
      <header>header</header>
      <main {...attrs}>main with attrs</main>
      <footer>footer</footer>
    </>
  )
}
