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
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    name: 'ProfileComponent',
    data(){
    return{
      current_user: [],
      user_name: '',
      photo_url: '',
      user_email: '',
    }
  },
  methods:{
    async getUserData(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user_uid = user.uid;
        }
      });
      const querySnapshot = await getDocs(collection(getFirestore(), "users"));
      querySnapshot.forEach((doc) => {
        if (doc.id === this.user_uid){
          this.current_user.push(doc.data());
        } 
      });
      this.user_name = this.current_user[0].fullName;
      this.user_email = this.current_user[0].email;
      this.photo_url = this.current_user[0].photoURL
      if (this.current_user[0].photoURL === '') {
        this.photo_url = require('../../assets/user.png');
      }
    },
  },
  mounted() {
    this.getUserData();
  }
}
</script>

<style lang="scss" src="./ProfileComponent.scss"></style>