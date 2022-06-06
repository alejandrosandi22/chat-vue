import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import Chat from "../views/Chat.vue";
import Profile from "../views/Profile.vue";
import Recover from "../views/Recover.vue";

const routes = [
  {
    path: "/",
    name: "default",
    component: Chat,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/recover",
    name: "Recover",
    component: Recover,
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat,
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: { requiresAuth: true },
  },
  {
    path: "/:catchMatch(.*)*",
    name: "404",
    redirect: "/login",
    component: Login,
  },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, _from, next) => {
  let logged = false;

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    user ? (logged = true) : (logged = false);

    if (to.matched.some((route) => route.meta.requiresAuth) && !logged) {
      next("/login");
    } else {
      next();
    }
  });
});

export default router;
