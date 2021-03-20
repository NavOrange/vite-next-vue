import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('@/views/index/HelloWorld.vue'),
    meta: { title: 'Home' },
    props: {
      msg: 'Hello Vue 3.0 + Vite',
    },
  },

  {
    path: '/migration',
    component: () => import('@/views/migration-from-vue2/index.vue'),
    meta: { title: 'Migration from Vue 2' },
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
