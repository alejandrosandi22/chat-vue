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
import { getDocs, getFirestore, collection } from "firebase/firestore";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import toastr from 'toastr';

export default {
  name: 'Recover',
  data(){
    return{
      email: '',
      match: false,
    }
  },
  methods: {
    async recoverPassword(){
      const querySnapshot = await getDocs(collection(getFirestore(), "users"));
      querySnapshot.forEach((doc) => {
        if (doc.data().email === this.email) {
          this.match = false;
          const auth = getAuth();
          sendPasswordResetEmail(auth, this.email)
          .then(() => {
            toastr['success']('', 'Succesfully');
          })
          .catch((error) => {
            const errorMessage = error.message;
            toastr['error'](errorMessage, "Error");
          });
        } else {
          this.match = true;
        }
      });
      if (this.match) {
        toastr['error']('The email does not exist', "Error");
      }
    }
  }
}
</script>
<style lang="scss" src="./Recover.scss"></style>