import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');