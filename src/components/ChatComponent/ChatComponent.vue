<template>
    <div class="chat-container">
        <span class="blur-background"></span>
        <div class="chat-wrapper">
            <div class="users-area">
                <h2 @click="getAllUsers">Users</h2>
                <div class="user-wrapper">
                  <img class="user-photo" :src="userPhoto" @error="imgError = true" alt="profile photo">
                  <div class="user">
                    <h3 class="user-name">Contacto #1</h3>
                    <p class="user-data">emailuser@gmail.com</p>
                  </div>
                </div>
                <div class="user-wrapper">
                  <img class="user-photo" :src="userPhoto" @error="imgError = true" alt="profile photo">
                  <div class="user">
                    <h3 class="user-name">Contacto #2</h3>
                    <p class="user-data">emailuser@gmail.com</p>
                  </div>
                </div>
            </div>
            <div class="message">
                <div class="actual-contact">
                    <img :src="userPhoto" @error="imgError = true" alt="profile">
                    <div>
                        <h2>{{ user_name }}</h2>
                        <h3>{{ user_email }}</h3>
                    </div>
                </div>
                <div class="input-text">
                    <input type="text" placeholder="Message">
                    <span class="send"><i class="far fa-paper-plane"></i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged, getUsers } from "firebase/auth";

export default {
  name: 'ChatComponent',
  data(){
    return{
      imgError: false,
      defaultImageError: require('../../assets/user.png'),
      user_name: '',
      photo_url: '',
      user_email: '',
      email: 'alesf22@gmail.com',
    }
  },
  computed:{
    userPhoto(){
      return this.imgError ? this.defaultImageError : 'https://cdn-icons-png.flaticon.com/512/1177/1177568.png';
    }
  },
  methods:{
  },
  mounted() {
  }
}
</script>

<style lang="scss" src="./ChatComponent.scss"></style>