<template>
    <div class="chat-container">
        <span class="blur-background"></span>
        <div class="chat-wrapper">
            <div class="contacts">
                <h2 @click="test()">Contacts</h2>
                <div class="">

                </div>
            </div>
            <div class="message">
                <div class="actual-contact">
                    <img :src="photo_url" alt="profile">
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
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
  name: 'ChatComponent',
  data(){
    return{
      user_name: '',
      photo_url: '',
      user_email: '',
    }
  },
  methods:{
    test(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        this.user_name = user.displayName;
        this.photo_url = user.photoURL;
        this.user_email = user.email;
      }); 
    }
  },
  mounted() {
    this.test();
  }
}
</script>

<style lang="scss" src="./ChatComponent.scss"></style>