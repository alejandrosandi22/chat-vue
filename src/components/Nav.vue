<template>
  <div class="nav-container">
    <ul>
      <li>
        <router-link to="/profile" title="profile"
          ><i class="fas fa-user-circle"></i
        ></router-link>
      </li>
      <li>
        <router-link to="/chat" title="chat"
          ><i class="far fa-comment-dots"></i
        ></router-link>
      </li>
      <li>
        <i @click="logout()" title="logout" class="fal fa-sign-out-alt"></i>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/auth";
import toastr from "toastr";

export default {
  name: "Nav",
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(location.reload())
        .catch((error) => {
          toastr["error"](error, "Error");
        });
    },
  },
};
</script>

<style lang="scss" src="../styles/Nav.scss"></style>
