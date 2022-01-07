<template>
  <div class="sign-up-container">
    <div class="blur-background"></div>
    <div class="form-wrapper">
      <h2 @click="test">Sign Up</h2>
      <div class="form-container">
        <form class="form" id="form" @submit.prevent="signup">
          <div class="line-one">
            <div class="name input-wrapper">
              <input type="text" id="name" class="input" v-model="name" :class="{'emptyInput': name !== ''}" required>
              <label for="name">Name</label>
            </div>
            <div class="last-name input-wrapper">
              <input type="text" id="last-name" class="input" v-model="lastName" :class="{'emptyInput': lastName !== ''}" required>
              <label for="last-name">Last Name</label>
            </div>
          </div>
          <div class="line-two">
            <div class="email input-wrapper">
              <input type="email" id="email" class="input" v-model="email" :class="{'emptyInput': email !== ''}" required>
              <label for="email">Email</label>
            </div>
            <div class="photo-user input-wrapper">
              <input type="file" id="photo_user" class="input" @change="selectedPhoto($event)" accept="image/png, image/gif, image/jpeg">
              <label class="label-input-file" for="photo_user">Choose a file</label>
              <span>{{ photoName }}</span>
            </div>
          </div>
          <div class="line-three">
            <div class="password input-wrapper">
              <input type="password" id="password" class="input" v-model="password" :class="{'emptyInput': password !== ''}" required>
              <label for="password">Password</label>
            </div>
            <div class="request-password input-wrapper">
              <input type="password" id="request-password" class="input" v-model="requestPassword" :class="{'emptyInput': requestPassword !== ''}" required>
              <label for="request-password">Request Password</label>
            </div>
          </div>
        </form>
      </div>
      <div class="actions">
          <button @click="clearInput()" class="cancel"></button>
          <button @click="signUpWithEmail()" form="form" type="submit" value="signup" class="submit"></button>
      </div>
      <div class="account">
        <router-link to="/login">Do you already have an account?</router-link>
      </div>
      <span>or</span>
      <button @click="signUpWithGoogle" class="google"><i class="fab fa-google"></i>Sign Up with Google</button>
      <button @click="signUpWithFacebook" class="facebook"><i class="fab fa-facebook-f"></i>Sign Up with Facebook</button>
    </div> 
  </div>  
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getFirestore, doc, setDoc } from "firebase/firestore";
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
      selectedUserPhoto: '',
      selectedPhotoName: '',
      photoName: 'selected item',
    }
  },
  methods:{
    test(){
      AppService.test();
    },
    selectedPhoto(event){
      this.selectedUserPhoto = event.target.files[0];
      this.photoName = this.selectedUserPhoto.name
    },
    signUpWithEmail(){
     const storageRef = firebase.storage().ref();
     
      if (this.password === this.requestPassword) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(async (user_data) =>{
          let fullName = `${this.name} ${this.lastName}`;
          let userData = {
            fullName: fullName,
            email: this.email,
            id: user_data.user.uid,
            photoURL: '',
          }
          if (this.selectedUserPhoto != '') {
            await storageRef.child(`/photos/${user_data.user.uid}`).put(this.selectedUserPhoto)
              .then(async () => {
                await storageRef.child(`/photos/${user_data.user.uid}`).getDownloadURL()
                .then((url) => {
                  userData.photoURL = url;
                })
                .catch((error) => toastr['error'](error, 'An error has occurred'))
              })
              .catch((error) => toastr['error'](error, 'An error has occurred'))
          }
          
          await setDoc(doc(this.db, 'users' , user_data.user.uid), userData)
            .then(() => {
              toastr['success'](`Welcome! ${fullName}`, 'Successful');
              setTimeout(() =>{
                location.replace('/messeges');
              },1500);
            })
            .catch(error => {
              toastr["error"](error, "Error");
            })
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
    clearInput(){
      this.lastName = '';
      this.name = '';
      this.email = '';
      this.password = '';
      this.requestPassword = '';
      this.requestEmail = '';

      location.replace('/login');
    }
  }
})
</script>

<style lang="scss" src="./SignUpComponent.scss"></style>
