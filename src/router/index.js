import { createRouter, createWebHistory } from 'vue-router';
import Auth from '../views/Auth/Auth.vue';
import Chat from '../views/Chat/Chat.vue';
import Error from '../views/Error/404.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    redirect: '/auth',
    component: Auth
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/:catchMatch(.*)*',
    name: '404',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
