<template>
    <div class="recover-container">
      <div class="blur-background"></div>
      <div class="recover-wrapper">
        <h2>Enter your email to reset your password</h2>
        <div class="input-wrapper">
          <input type="email" id="email" v-model="email" :class="{'emptyInput': email !== ''}">
          <label for="email">Email</label>
        </div>
        <button class="send-button" @click="recoverPassword">click</button>
      </div>
      <router-link to="/login" class="return"></router-link>
    </div>
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default {
  name: 'Recover',
  data(){
    return{
      email: '',
    }
  },
  methods: {
    recoverPassword(){
    const auth = getAuth();
    sendPasswordResetEmail(auth, this.email)
      .then(() => {
        console.log('se mandó')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  }
}
</script>
<style lang="scss" src="./Recover.scss"></style>