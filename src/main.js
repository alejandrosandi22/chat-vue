import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/compat/app";
import { firebaseConfig } from "./environments";
import "firebase/storage";
import "firebase/compat/auth";

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
