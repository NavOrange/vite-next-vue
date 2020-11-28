import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('/src/views/index/HelloWorld.vue'),
    meta: { title: 'Home' },
    props: {
      msg: 'Hello Vue 3.0 + Vite',
    },
  },

  {
    path: '/migration',
    component: () => import('/src/views/migration-from-vue2/index.vue'),
    meta: { title: 'Migration from Vue 2' },
  },

  {
    path: '/typescript',
    component: () => import('/src/views/typescript/index.tsx'),
    meta: { title: 'Typescript' },
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
