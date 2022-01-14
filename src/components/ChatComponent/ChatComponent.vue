<template>
    <div class="chat-container">
        <span class="blur-background"></span>
        <div class="chat-wrapper">
            <div class="users-area" :class="{'toggle-user': barsToggle === true}">
                <h2>Users</h2>
                <div class="all-users-wrapper">
                  <div class="user-wrapper" v-for="user in users" :key="user.id" @click="selectUserToChat(user)">
                    <img draggable="false" class="user-photo" :src="user.photoURL" @error="imgError" alt="profile photo">
                    <div class="user">
                      <h3 class="user-name">{{ user.fullName }}</h3>
                      <p class="user-data">{{ user.email }}</p>
                    </div>
                  </div>
                </div>
            </div>
            <span><i class="fal fa-bars" @click="toggleUsers"></i></span>
            <div v-if="selectedUser" class="messege-area-wrapper" :class="{'toggle': barsToggle === true}">
              <div class="actual-contact">
                <img :src="photo_url" @error="imgError" alt="profile">
                <div>
                  <h2>{{ user_name }}</h2>
                  <h3>{{ user_email }}</h3>
                </div>
              </div>
                <div  v-if="currentUser" class="messeges-container" >
                <div class="messege-wrapper" v-for="userMessege in usersMesseges" :key="userMessege.key" >
                  <div class="messege"
                    v-if="(userMessege.transmitter === currentUser && userMessege.receive === user_id) || (userMessege.transmitter === user_id && userMessege.receive === currentUser)"
                    :class="(userMessege.transmitter === currentUser ? 'current-user' : 'messege')">
                    <p class="text">{{userMessege.messege }}</p>
                    <h4 class="time"><span>{{ userMessege.date }}</span>{{ userMessege.time }}</h4>
                  </div>
                </div>
                <div id="scrble" ref="scrollable"></div>
              </div>
              <div class="input-text">
                  <input v-on:keyup.enter="sendMessege()" v-model="messegeToSend" type="text" placeholder="Messege">
                  <span  @click="sendMessege" class="send"><i class="far fa-paper-plane"></i></span>
              </div>
            </div>
            <div v-else class="no-selected-user" :class="{'toggle': barsToggle === true}">
              <h3>Select one user to chat</h3>
            </div>
        </div>
    </div>
</template>

<script>
import { getFirestore, collection, query, orderBy, setDoc, onSnapshot, doc} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import toastr from 'toastr';

export default {
  name: 'ChatComponent',
  data(){
    return{
      auth: getAuth(),
      selectedUser: false,
      users: [],
      defaultImageError: require('../../assets/user.png'),
      user_name: '',
      photo_url: '',
      user_email: '',
      currentUser: '',
      user_id: '',
      time: '',
      db: getFirestore(),
      messegeToSend: '',
      dataMessege: [],
      usersMesseges: [],
      barsToggle: false,
    }
  },
  methods:{
    toggleUsers(){
      !this.barsToggle ? this.barsToggle = true : this.barsToggle = false;
    },
    async getCurrentUser(){
      await onAuthStateChanged(this.auth, (user) => {
        if (user) {
          this.currentUser = user.uid;
        }
      });
    },
    selectUserToChat(user){
      this.barsToggle = false;
      this.selectedUser = true;
      this.user_name = user.fullName;
      this.user_email = user.email;
      this.photo_url = user.photoURL;
      this.user_id = user.id;
      
      setTimeout(() => {
        this.$refs['scrollable'].scrollIntoView({behavior: 'smooth'});
      },300)
    },
    setTime(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;
    },
    async sendMessege(){

      const date = new Date();
      let day = date.getDate()
      let month = date.getMonth() + 1;
      let year = date.getFullYear()


      this.dataMessege = {
        receive: this.user_id,
        transmitter: this.currentUser,
        messege: this.messegeToSend,
        date: `${day}/${month}/${year}`,
        time: this.setTime(new Date),
        createdAt: Date.now(),
      }

      if (this.messegeToSend != '') {
        this.usersMesseges = [];
        await setDoc(doc(collection(this.db, 'messeges')),this.dataMessege)
          .then(() => {
            this.messegeToSend = '';
            this.$refs['scrollable'].scrollIntoView({behavior: 'smooth'});
          })
          .catch((error) => {
            toastr['error'](error, 'Error');
        })
      } else {
        toastr['warning']('You must enter a message', 'Empty text');
      } 
    },
    async getDocs(){
      const usersCollection = collection(this.db, 'users');
      const q = query(usersCollection, orderBy('fullName', 'asc'));

      onSnapshot(q, (snapchot => {
        snapchot.docs.forEach((doc) => {
          if (doc.id != this.currentUser){
            this.users.push({...doc.data(), id: doc.id})
          }
        })
      }))
    },
    async uploadMesseges(){
      const messegesCollection = collection(this.db, 'messeges');
      const q = query(messegesCollection, orderBy('createdAt', 'asc'));

      await onSnapshot(q, (snapchot) => {
        this.usersMesseges = [];
        snapchot.docs.forEach((doc) => {
          this.usersMesseges.push(doc.data());
        })
        if (this.selectedUser === true) {
          setTimeout(() => {
            this.$refs['scrollable'].scrollIntoView({behavior: 'smooth'});
          },300)
        }
      });
    },
    imgError(e){
      e.target.src = this.defaultImageError;
    },
  },
  mounted() {
    this.getCurrentUser();
    this.getDocs();
    this.uploadMesseges();
  },
}
</script>

<style lang="scss" src="./ChatComponent.scss"></style>