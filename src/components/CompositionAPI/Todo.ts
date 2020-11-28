// copy by https://github.com/vuejs/vuejs.org/blob/master/src/v2/examples/vue-20-todomvc/index.html

import { computed, ref, watch, onBeforeMount, onBeforeUnmount } from 'vue'

interface Todo {
  id: number
  title: string
  completed: boolean
}

// localStorage persistence
const STORAGE_KEY = 'todos-vuejs-3.0'
const todoStorage = {
  fetch: function () {
    const todos: Todo[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos: Todo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  },
  uid: 0,
}

interface Filters {
  all: (todo: Todo[]) => Todo[]
  active: (todo: Todo[]) => Todo[]
  completed: (todo: Todo[]) => Todo[]
  [key: string]: (todo: Todo[]) => Todo[]
}

// visibility filters8
const filters: Filters = {
  all: function (todos: Todo[]) {
    return todos
  },
  active: function (todos: Todo[]) {
    return todos.filter(function (todo: Todo) {
      return !todo.completed
    })
  },
  completed: function (todos: Todo[]) {
    return todos.filter(function (todo: Todo) {
      return todo.completed
    })
  },
}

export default function () {
  let beforeEditCache: any = null
  let nodeLink: HTMLLinkElement

  // ref
  const visible = ref(false)
  const todos = ref(todoStorage.fetch())
  const newTodo = ref('')
  const editedTodo = ref<null | Todo>(null)
  const visibility = ref('all')

  // computed
  const filteredTodos = computed(() => filters[visibility.value](todos.value))
  const remaining = computed(() => filters.active(todos.value).length)
  const allDone = computed({
    get: function () {
      return remaining.value === 0
    },
    set: function (value: boolean) {
      todos.value.forEach(function (todo) {
        todo.completed = value
      })
    },
  })

  // watch
  watch(todos, (todos) => todoStorage.save(todos), { deep: true })

  // filter
  const pluralize = (n: number) => (n === 1 ? 'item' : 'items')

  // life hook
  onBeforeMount(async () => {
    nodeLink = await loadCss()
    visible.value = true
  })

  onBeforeUnmount(() => {
    document.head.removeChild(nodeLink)
  })

  // methods
  async function loadCss() {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/todomvc-app-css@2.2.0/index.css'

    await new Promise((resolve, reject) => {
      link.addEventListener('load', resolve)
      link.addEventListener('error', reject)
      document.head.appendChild(link)
    })

    return link
  }

  function addTodo(e: KeyboardEvent) {
    if (e.code !== 'Enter') return

    var value = newTodo.value && newTodo.value.trim()
    if (!value) {
      return
    }
    todos.value.push({
      id: todoStorage.uid++,
      title: value,
      completed: false,
    })
    newTodo.value = ''
  }

  function editTodo(todo: Todo) {
    beforeEditCache.value = todo.title
    editedTodo.value = todo
  }

  function removeTodo(todo: Todo) {
    todos.value.splice(todos.value.indexOf(todo), 1)
  }

  function doneEdit(e: KeyboardEvent, todo: Todo) {
    if (e.code !== 'Enter') return

    if (!editedTodo.value) {
      return
    }
    editedTodo.value = null
    todo.title = todo.title.trim()
    if (!todo.title) {
      removeTodo(todo)
    }
  }

  function cancelEdit(e: KeyboardEvent, todo: Todo) {
    if (e.code !== 'Esc') return

    editedTodo.value = null
    todo.title = beforeEditCache
  }

  function removeCompleted() {
    todos.value = filters.active(todos.value)
  }

  return {
    visible,
    todos,
    newTodo,
    editedTodo,
    visibility,
    filteredTodos,
    remaining,
    allDone,
    pluralize,

    addTodo,
    editTodo,
    removeTodo,
    doneEdit,
    cancelEdit,
    removeCompleted,
  }
}
