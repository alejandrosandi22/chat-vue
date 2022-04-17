import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from '../components/LoginComponent/LoginComponent.vue';
import SignUp from '../components/SignUpComponent/SignUpComponent.vue';
import Messeges from '../views/Messeges/Messeges.vue';
import Profile from '../views/Profile/Profile.vue';
import Recover from '../views/Recover/Recover.vue'

const routes = [
  {
    path: '/',
    name: 'Default',
    redirect: '/messeges',
    component: Messeges
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
    component: Messeges,
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
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
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {

  let logged = false;

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    user ? logged = true : logged = false;

    if (to.matched.some(route => route.meta.requiresAuth) && !logged) {
      next('/login')
    } else {
      next();
    }

  });

})

export default router
