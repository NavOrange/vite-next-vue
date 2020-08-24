import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: '/',
    component: () => import('/src/components/HelloWorld.vue'),
    meta: { title: 'Home' },
    props: {
      msg: 'Hello Vue 3.0 + Vite',
    },
  },

  {
    path: '/migration',
    component: () => import('/src/components/MigrationFromVue2/index.vue'),
    meta: { title: 'Migration from Vue 2' },
  },

  {
    path: '/parallax',
    component: () => import('/src/views/parallax/index.vue'),
    meta: { title: 'Parallax' },
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
