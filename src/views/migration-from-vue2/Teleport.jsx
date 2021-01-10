/* eslint-disable no-unused-vars */
import { h, Fragment, Teleport, defineComponent, ref } from 'vue'
/* eslint-enable */

import './Teleport.scss'

export const FeatureTeleportOne = defineComponent({
  name: 'ExampleTeleport',
  data() {
    return {
      modalOpen: false,
    }
  },
  render() {
    return (
      <>
        <button onClick={() => (this.modalOpen = true)}>
          Open full screen modal! (With teleport!)
        </button>

        <Teleport to="body">
          {this.modalOpen ? (
            <div class="modal">
              <div>
                I'm a teleported modal! (My parent is "body")
                <button onClick={() => (this.modalOpen = false)}>Close</button>
              </div>
            </div>
          ) : null}
        </Teleport>
      </>
    )
  },
})

export const FeatureTeleportTwo = defineComponent(() => {
  const modalOpen = ref(false)

  const toggle = () => {
    modalOpen.value = !modalOpen.value
  }

  return () => (
    <>
      <button onClick={toggle}>Open full screen modal! (With teleport!)</button>

      <Teleport to="body">
        {modalOpen.value ? (
          <div class="modal">
            <div>
              I'm a teleported modal! (My parent is "body")
              <button onClick={toggle}>Close</button>
            </div>
          </div>
        ) : null}
      </Teleport>
    </>
  )
})
