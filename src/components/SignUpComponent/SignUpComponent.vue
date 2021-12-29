<template>
  <div class="sign-up-container">
    <div class="blur-background"></div>
    <div class="form-wrapper">
      <h2>Sign Up</h2>
      <div class="form-container">
        <form class="form" id="form" @submit.prevent="signUp">
          <div class="left">
            <div class="name">
              <input type="text" id="name" class="input"  v-model="name" :class="{'emptyInput': name !== ''}" required>
              <label for="name">Name</label>
            </div>
            <div class="email">
              <input type="email" id="email" class="input"  v-model="email" :class="{'emptyInput': email !== ''}" required>
              <label for="email">Email</label>
            </div>
            <div class="password">
              <input type="password" id="password" class="input" v-model="password" :class="{'emptyInput': password !== ''}" required>
              <label for="password">Password</label>
            </div>
          </div>
          <div class="right">
            <div class="last-name">
              <input type="text" id="last-name" class="input"  v-model="lastName" :class="{'emptyInput': lastName !== ''}" required>
              <label for="last-name">Last Name</label>
            </div>
            <div class="request-email">
              <input type="email" id="request-email" class="input"  v-model="requestEmail" :class="{'emptyInput': requestEmail !== ''}" required>
              <label for="request-email">Request Email</label>
            </div>
            <div class="request-password">
              <input type="password" id="request-password" class="input" v-model="requestPassword" :class="{'emptyInput': requestPassword !== ''}" required>
              <label for="request-password">Request Password</label>
            </div>
          </div>
        </form>
      </div>
      <div class="actions">
          <button @click="clearInput()" class="cancel"></button>
          <button @click="signingUp()" form="form" type="submit" value="signup" class="submit"></button>
      </div>
      <div class="account">
        <a @click="emitRegistered()">Do you already have an account?</a>
      </div>
      <span>or</span>
      <button @click="signUpGoogle" class="google"><i class="fab fa-google"></i>Sign Up with Google</button>
      <button @click="signUpFacebook" class="facebook"><i class="fab fa-facebook-f"></i>Sign Up with Facebook</button>
    </div> 
  </div>  
</template>

<script>
import firebase from 'firebase/compat/app';
import AppService from '../../services/AppService';
import toastr from 'toastr';

export default ({
  name: 'SignUpComponent',
  data(){
    return{
      user_name: String,
      photo_url: String,
      email: '',
      password: '',
      lastName: '',
      name: '',
      requestPassword: '',
      requestEmail: '',
      registered: true,
    }
  },
  methods:{
    signingUp(){
      if (this.email === this.requestEmail && this.password === this.requestPassword) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() =>{
            location.replace('/chat');
          })
          .catch(() => {
            toastr["error"]("The email address is already in use by another account", "Error")
            toastr.options = AppService.toastrOptions;
          });
      } else {
        toastr["error"]("The email or password do not match", "Error");
        toastr.options = AppService.toastrOptions;
      }
    },
    signUpGoogle(){
      AppService.signUpWithGoogle();
    },
    signUpFacebook(){
      AppService.signUpWithFacebook();
    },
    emitRegistered(){
      this.registered = true;
      this.$emit('receiveConfirmation', this.registered);
    },
    clearInput(){
      this.lastName = '';
      this.name = '';
      this.email = '';
      this.password = '';
      this.requestPassword = '';
      this.requestEmail = '';
    }
  }
})
</script>

<style lang="scss" src="./SignUpComponent.scss"></style>
