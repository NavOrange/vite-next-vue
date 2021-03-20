<template>
  <img alt="Vue logo" src="@/assets/logo.png" />

  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <composition />

  <ul>
    <li v-for="{ id, title, description } in events" :key="id">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <button
        :disabled="model.id === id"
        type="button"
        @click="model = { id, title, description }"
      >
        {{ model.id === id ? 'editing' : 'edit' }}
      </button>
      <button type="button" @click="del(id)">del</button>
    </li>
  </ul>

  <form>
    <input v-model="model.title" type="text" />

    <input v-model="model.description" type="text" />

    <button type="button" @click="submit">
      {{ model.id ? 'update' : 'submit' }}
    </button>
  </form>

  <ul>
    <li>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
      placeat voluptas pariatur quas ad molestias maiores quos repudiandae dicta
      voluptates dolore rem harum vitae maxime optio, aut earum labore non.
    </li>
    <li>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
      dignissimos et dolorum corrupti architecto quis nulla iure, error fugiat
      natus, in unde, excepturi modi tempora accusamus temporibus porro aliquid
      placeat.
    </li>
  </ul>
</template>

<script>
import composition from '@/components/CompositionAPI/Template.vue'
import { getEvents, addEvent, updateEvent, delEvent } from '@/api/event'

export default {
  name: 'HelloWorld',
  components: {
    composition,
  },
  props: {
    msg: {
      type: String,
      default: 'msg text',
    },
  },
  data() {
    return {
      count: 0,
      events: [],
      model: {
        title: '',
        description: '',
      },
    }
  },
  created() {
    this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      this.events = await getEvents()
    },

    async submit() {
      const isEdit = this.model.id
      const event = await (isEdit ? updateEvent : addEvent)({
        ...this.model,
      })

      if (isEdit) this.fetchEvents()
      else this.events.push(event)

      this.model = {
        title: '',
        description: '',
      }
    },

    async del(id) {
      await delEvent(id)
    },
  },
}
</script>
