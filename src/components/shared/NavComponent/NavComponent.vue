<template>
  <div class="nav-container">
    <ul>
      <li data-content="profile"><router-link to="/profile"><i class="fas fa-user-circle"></i></router-link></li>
      <li data-content="chat"><router-link to="/messeges"><i class="far fa-comment-dots"></i></router-link></li>
      <li data-content="logout" @click="Logout()"><i class="fal fa-sign-out-alt"></i></li>
    </ul>
  </div>
</template>

<script>
import AppService from '../../../services/AppService';

export default {
  name: 'NavComponent',
  methods:{
    Logout(){
        AppService.logout();
    },
  }
}
</script>

<style lang="scss" src="./NavComponent.scss" ></style>