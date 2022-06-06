import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import firebase from 'firebase/compat/app';
import environment from './environments/environment';
import 'firebase/storage';
import 'firebase/compat/auth';

firebase.initializeApp(environment.firebaseConfig);

createApp(App).use(router).mount('#root');