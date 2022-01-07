import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/LoginComponent/LoginComponent.vue';
import SignUp from '../components/SignUpComponent/SignUpComponent.vue';
import Messeges from '../views/Messeges/Messeges.vue';
import Profile from '../views/Profile/Profile.vue';
import Recover from '../views/Recover/Recover.vue'

const routes = [
  {
    path: '/',
    name: 'Auth',
    redirect: '/login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/messeges',
    name: 'Messeges',
    component: Messeges
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/recover',
    name: 'Recover',
    component: Recover
  },
  {
    path: '/:catchMatch(.*)*',
    name: '404',
    redirect: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
