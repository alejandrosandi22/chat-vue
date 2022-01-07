import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA75OOJWRN3n3B-_3hEireV569whygQ17o",
  authDomain: "chat-production-75509.firebaseapp.com",
  projectId: "chat-production-75509",
  storageBucket: "chat-production-75509.appspot.com",
  messagingSenderId: "493644836494",
  appId: "1:493644836494:web:6072110bfb38144f77a3df"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');