<template>
    <div class="login-container">
      <div class="blur-background"></div>
      <div class="form-wrapper">
        <h2>Login</h2>
        <form @submit.prevent="Login" class="form" id="loginForm">
          <div class="email">
            <input type="email" id="email" class="input"  v-model="email" :class="{'emptyInput': email !== ''}">
            <label for="email" class="label-email">Email</label>
          </div>
          <div class="password">
            <input type="password" id="password" class="input" v-model="password" :class="{'emptyInput': password !== ''}">
            <label for="password">Password</label>
          </div>
          <button @click="loginWtihEmail()" type="submit" form="loginForm" value="Login" class="submit"></button>
        </form>
        <div class="account">
          <a href="#">Forget your password?</a>
          <a @click="emitRegistered()" >You do not have an account?</a>
        </div>
        <span>or</span>
        <button @click="loginWithGoogle" class="google"><i class="fab fa-google"></i>Login with Google</button>
        <button @click="loginWithFacebook" class="facebook"><i class="fab fa-facebook-f"></i>Login with Fcaebook</button>
      </div> 
    </div>    
</template>

<script>
import firebase from 'firebase/compat/app';
import AppService from '../../services/AppService'
import toastr from 'toastr';

export default {
  name: 'LoginComponent',
  data(){
    return{
      email: '',
      password: '',
      alert: false,
      registered: true,
    }
  },
  methods:{
    loginWtihEmail(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() =>{
          setTimeout(() =>{
          location.replace('/chat');
        },1500)
        })
        .catch(err => {
          if (err.code == 'auth/invalid-email' || err.code == 'auth/user-not-found'){
            toastr['error']("Invalid email or does not exist","Error");
            toastr.options = AppService.toastrOptions;
          } else {
            toastr['error']('The password is invalid or the user does not have a password',"Error");
            toastr.options = AppService.toastrOptions;
          }
        })
    },
    loginWithGoogle(){
      AppService.signUpWithGoogle();
    },
    loginWithFacebook(){
      AppService.signUpWithFacebook();
    },
    emitRegistered(){
      this.registered = false;
      this.$emit('receiveConfirmation', this.registered);
    }
  }
}
</script>

<style lang="scss" src="./LoginComponent.scss"></style>