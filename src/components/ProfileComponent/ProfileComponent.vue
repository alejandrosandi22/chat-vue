<template>
  <div class="profile-container">
    <span class="blur-background"></span>
    <div v-if="edit" class="actions">
      <button @click="cancel" class="cancel-button">Cancel</button>
      <button @click="savePhoto" class="save-button">Save</button>
    </div>
    <div class="profile-wrapper">
    <h4>Your profile:</h4>
      <table>
        <tr class="photo-row">
          <td class="first-column">Photo:</td>
          <td>
            <input type="file" id="file" @change="changePhoto($event)">
            <label for="file">
              <img draggable="false" :src="photo_url" @error="imgError" alt="profile_photo">
              <span><i class="fal fa-upload"></i></span>
            </label>
          </td>
        </tr>
        <tr>
          <td class="first-column">Name:</td>
          <td>{{ user_name }}</td>
        </tr>
        <tr>
          <td class="first-column">Email:</td>
          <td>{{ user_email }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { getDocs, getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'vue-router';
import toastr from 'toastr';

export default {
    name: 'ProfileComponent',
    data(){
    return{
      current_user: [],
      user_name: '',
      photo_url: '',
      user_email: '',
      user_uid: '',
      selectedPhoto: '',
      edit: false,
      db: getFirestore(),
      defaultImageError: require('../../assets/user.png'),
      router: useRouter(),
    }
  },
  methods:{
    cancel(){
      this.edit = false;
      this.selectedPhoto = null;
    },
    changePhoto(event){
      this.edit = true;
      this.selectedPhoto = event.target.files[0];
    },
    async savePhoto(){
      const storageRef = firebase.storage().ref();
      const currentUserId = this.current_user[0].id;

      let userData = {
        fullName: this.user_name,
        email: this.user_email,
        id: currentUserId,
        photoURL: '',
      }
      if (this.selectedPhoto != '') {
        await storageRef.child(`/photos/${currentUserId}`).put(this.selectedPhoto)
          .then(async () => {
          await storageRef.child(`/photos/${currentUserId}`).getDownloadURL()
          .then(async (url) => {
            userData.photoURL = url;
              await setDoc(doc(this.db, 'users' , currentUserId), userData)
              .then(() => {
                  toastr['success']('', 'Successful');
                  this.photo_url = this.current_user[0].photoURL;
                  this.edit = false;
                  setTimeout(() =>{
                    this.router.replace('/profile');
                  },500);
              })
              .catch(error => {
                toastr["error"](error, "Error");
              })
          })
          .catch((error) => toastr['error'](error, 'An error has occurred 2'))
        })
        .catch((error) => toastr['error'](error, 'An error has occurred 1'))
      }
    },
    async getUserData(){
      const auth = getAuth();
      await onAuthStateChanged(auth, (user) => {
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
      this.photo_url = this.current_user[0].photoURL;
      if (this.current_user[0].photoURL === '') {
        this.photo_url = require('../../assets/user.png');
      }
    },
    imgError(e){
      e.target.src = this.defaultImageError;
    },
  },
  mounted() {
    this.getUserData();
  }
}
</script>

<style lang="scss" src="./ProfileComponent.scss"></style>