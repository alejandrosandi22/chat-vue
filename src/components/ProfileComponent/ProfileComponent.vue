<template>
    <div class="profile-container">
        <span class="blur-background"></span>
        <div class="profile-wrapper">
            <h4>Your profile:</h4>
            <table>
                <tr class="photo-row">
                    <td class="first-column">Photo:</td>
                    <td><img draggable="false" :src="photo_url"  alt=""></td>
                </tr>
                <tr>
                    <td class="first-column">Name:</td>
                    <td>{{ user_name }}</td>
                </tr>
                <tr>
                    <td class="first-column" >Email:</td>
                    <td>{{ user_email }}</td>
                </tr>
                <tr>
                    <td></td>
                    <td><button class="edit-button">Edit</button></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: 'ProfileComponent',
    data(){
    return{
      user_name: '',
      photo_url: '',
      user_email: '',
    }
  },
  methods:{
    getUserData(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user){
          this.user_name = user.displayName;
          this.photo_url = user.photoURL;
          this.user_email = user.email;
        } else {
          this.user_name = ''
        }
      }); 
    }
  },
  mounted() {
    this.getUserData();
  }
}
</script>

<style lang="scss" src="./ProfileComponent.scss"></style>