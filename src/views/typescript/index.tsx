// copy by https://github.com/vuejs/vuejs.org/blob/master/src/v2/examples/vue-20-todomvc/index.html

import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import useTodo from '/src/components/CompositionAPI/Todo'

export default defineComponent({
  name: 'Todo',
  setup() {
    return { ...useTodo() }
  },
  watch: {
    $route: function (to) {
      this.visibility = to.query.visibility
    },
  },
  render() {
    return (
      <section
        class="todoapp"
        style={{
          visibility: this.visible ? 'visible' : 'hidden',
        }}
      >
        <header class="header">
          <h1>todos</h1>
          <input
            class="new-todo"
            autofocus
            autocomplete="off"
            placeholder="What needs to be done?"
            value={this.newTodo}
            onChange={(e) =>
              (this.newTodo = (e.target as HTMLInputElement).value)
            }
            onKeyup={this.addTodo}
          />
        </header>

        <section
          class="main"
          style={{ display: this.todos.length ? 'block' : 'none' }}
        >
          <input
            id="toggle-all"
            class="toggle-all"
            type="checkbox"
            checked={this.allDone}
            onChange={(e) =>
              (this.allDone = (e.target as HTMLInputElement).checked)
            }
          />
          <label for="toggle-all"></label>
          <ul class="todo-list">
            {this.filteredTodos.map((todo) => (
              <li
                key={todo.id}
                class={{
                  todo: true,
                  completed: todo.completed,
                  editing: todo == this.editedTodo,
                }}
              >
                <div class="view">
                  <input
                    class="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) =>
                      (todo.completed = (e.target as HTMLInputElement).checked)
                    }
                  />
                  <label onDblclick={() => this.editTodo(todo)}>
                    {todo.title}
                  </label>
                  <button
                    class="destroy"
                    onClick={() => this.removeTodo(todo)}
                  ></button>
                </div>
                <input
                  class="edit"
                  type="text"
                  value={todo.title}
                  onChange={(e) =>
                    (todo.title = (e.target as HTMLInputElement).value)
                  }
                  autofocus
                  onBlur={() =>
                    this.doneEdit({ code: 'Enter' } as KeyboardEvent, todo)
                  }
                  onKeyup={(e) => {
                    this.doneEdit(e, todo)
                    this.cancelEdit(e, todo)
                  }}
                />
              </li>
            ))}
          </ul>
        </section>
        <footer
          class="footer"
          style={{
            display: this.todos.length ? 'block' : 'none',
            boxSizing: 'content-box',
          }}
        >
          <span class="todo-count">
            <strong>{this.remaining}</strong> {this.pluralize(this.remaining)}{' '}
            left
          </span>
          <ul class="filters">
            <li>
              <RouterLink
                to="?visibility=all"
                class={{ selected: this.visibility == 'all' }}
              >
                All
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="?visibility=active"
                class={{ selected: this.visibility == 'active' }}
              >
                Active
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="?visibility=completed"
                class={{ selected: this.visibility == 'completed' }}
              >
                Completed
              </RouterLink>
            </li>
          </ul>
          <button
            class="clear-completed"
            onClick={() => this.removeCompleted()}
            style={{
              display: this.todos.length > this.remaining ? 'block' : 'none',
            }}
          >
            Clear completed
          </button>
        </footer>
      </section>
    )
  },
})
