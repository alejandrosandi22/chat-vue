<template>
    <div class="chat-container">
        <span class="blur-background"></span>
        <div class="chat-wrapper">
            <div class="users-area">
                <h2 @click="getDocs">Users</h2>
                <div class="all-users-wrapper">
                  <div class="user-wrapper" v-for="user in users" :key="user.id" @click="selectUserToChat(user)">
                    <img draggable="false" class="user-photo" :src="user.photoURL" @error="imgError" alt="profile photo">
                    <div class="user">
                      <h3 class="user-name">{{ user.fullName }}</h3>
                      <p class="user-data">{{ user.email }}</p>
                    </div>
                  </div>
                </div>
            </div>
            <div v-if="selectedUser" class="message-area-wrapper">
                <div class="actual-contact">
                    <img :src="photo_url" @error="imgError" alt="profile">
                    <div>
                        <h2>{{ user_name }}</h2>
                        <h3>{{ user_email }}</h3>
                    </div>
                </div>
                <div class="messeges-container">
                  <div class="messege">
                    
                  </div>
                </div>
                <div class="input-text">
                    <input type="text" placeholder="Message">
                    <span class="send"><i class="far fa-paper-plane"></i></span>
                </div>
            </div>
            <div v-else class="no-selected-user">
              <h3>Select one user to chat</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { getDocs, getFirestore, collection, query, orderBy, limit } from "firebase/firestore";
import { getAuth, onAuthStateChanged, getUsers } from "firebase/auth";
import { onBeforeMount } from '@vue/runtime-core';

export default {
  name: 'ChatComponent',
  data(){
    return{
      auth: getAuth(),
      selectedUser: false,
      users: [],
      defaultImageError: require('../../assets/user.png'),
      user_name: '',
      photo_url: '',
      user_email: '',
      user_uid: '',
      db: getFirestore(),
    }
  },
  methods:{
    selectUserToChat(user){
      this.selectedUser = true;
      this.user_name = user.fullName;
      this.user_email = user.email;
      this.photo_url = user.photoURL;
    },
    async getDocs(){
      onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.user_uid = user.uid;
        }
      });
      const querySnapshot = await getDocs(collection(this.db, "users"), orderBy('fullName', 'desc'));
      querySnapshot.forEach((doc) => {
        if (doc.id != this.user_uid){
          this.users.push(doc.data());
        } 
      });
    },
    imgError(e){
      e.target.src = this.defaultImageError;
    },
  },
  mounted() {
    this.getDocs();
  }
}
</script>

<style lang="scss" src="./ChatComponent.scss"></style>