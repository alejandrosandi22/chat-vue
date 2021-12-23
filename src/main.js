import { createApp } from 'vue';
import App from './App.vue';
import router from './router'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBm7bb1VKPMK_y3YLDRMvuxDo1J0S4VEAA",
    authDomain: "chat-dev-7c392.firebaseapp.com",
    projectId: "chat-dev-7c392",
    storageBucket: "chat-dev-7c392.appspot.com",
    messagingSenderId: "193689647367",
    appId: "1:193689647367:web:bedaca9e34b5273e46ada2"
};

const app = initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app');
