import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('/src/components/HelloWorld.vue'),
      props: {
        msg: 'Hello Vue 3.0 + Vite'
      }
    }
  ],
});
