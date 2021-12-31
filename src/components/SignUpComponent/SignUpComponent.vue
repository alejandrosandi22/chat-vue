<template>
  <div class="sign-up-container">
    <div class="blur-background"></div>
    <div class="form-wrapper">
      <h2>Sign Up</h2>
      <div class="form-container">
        <form class="form" id="form">
          <div class="line-one">
            <div class="name">
              <input type="text" id="name" class="input"  v-model="name" :class="{'emptyInput': name !== ''}" required>
              <label for="name">Name</label>
            </div>
            <div class="last-name">
              <input type="text" id="last-name" class="input"  v-model="lastName" :class="{'emptyInput': lastName !== ''}" required>
              <label for="last-name">Last Name</label>
            </div>
          </div>
          <div class="line-two">
            <div class="email">
              <input type="email" id="email" class="input"  v-model="email" :class="{'emptyInput': email !== ''}" required>
              <label for="email">Email</label>
            </div>
            <div class="request-email">
              <input type="email" id="request-email" class="input"  v-model="requestEmail" :class="{'emptyInput': requestEmail !== ''}" required>
              <label for="request-email">Request Email</label>
            </div>
          </div>
          <div class="line-three">
            <div class="password">
              <input type="password" id="password" class="input" v-model="password" :class="{'emptyInput': password !== ''}" required>
              <label for="password">Password</label>
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
      <button @click="signUpWithGoogle" class="google"><i class="fab fa-google"></i>Sign Up with Google</button>
      <button @click="signUpWithFacebook" class="facebook"><i class="fab fa-facebook-f"></i>Sign Up with Facebook</button>
    </div> 
  </div>  
</template>

<script>
import firebase from 'firebase/compat/app';
import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";
import AppService from '../../services/AppService';
import toastr from 'toastr';

export default ({
  name: 'SignUpComponent',
  data(){
    return{
      db: getFirestore(),
      user_name: '',
      photo_url: '',
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
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(() =>{
          let fullName = `${this.name} ${this.lastName}`;
            toastr['success'](`Welcome ${fullName}`, 'Successful');
            setTimeout(() =>{
              location.replace('/chat');
            },1500);
        })
        .catch(() => {
          toastr["error"]("The email address is already in use by another account", "Error");
        });
      } else {
        toastr["error"]("The email or password do not match", "Error");
      }
    },
    signUpWithGoogle(){
      AppService.signInWithGoogle();
    },
    signUpWithFacebook(){
      AppService.signInWithFacebook();
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
