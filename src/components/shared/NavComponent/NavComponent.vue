<template>
  <div class="nav-container">
    <ul>
      <li data-content="profile"><router-link to="/profile"><i class="fas fa-user-circle"></i></router-link></li>
      <li data-content="chat"><router-link to="/messeges"><i class="far fa-comment-dots"></i></router-link></li>
      <li data-content="logout" @click="logout()"><i class="fal fa-sign-out-alt"></i></li>
    </ul>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/auth'
import toastr from 'toastr';

export default {
  name: 'NavComponent',
  methods:{
    logout(){
      firebase.auth().signOut().then(location.reload()).catch(error => {
        toastr['error'](error,"Error");
      })
    }
  }
}
</script>

<style lang="scss" src="./NavComponent.scss" ></style>