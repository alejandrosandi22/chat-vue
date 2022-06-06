<template>
  <div class="login-container">
    <div class="form-wrapper">
      <h2>Login</h2>
      <form @submit.prevent="Login" class="form" id="loginForm">
        <div class="email">
          <input
            type="email"
            id="email"
            class="input"
            v-model="email"
            :class="{ emptyInput: email !== '' }"
          />
          <label for="email" class="label-email">Email</label>
        </div>
        <div class="password">
          <input
            type="password"
            id="password"
            class="input"
            v-model="password"
            :class="{ emptyInput: password !== '' }"
          />
          <label for="password">Password</label>
        </div>
        <button
          @click="loginWtihEmail()"
          type="submit"
          form="loginForm"
          value="Login"
          class="submit"
        ></button>
      </form>
      <div class="account">
        <router-link to="/recover">Forget your password?</router-link>
        <router-link to="/signup">You do not have an account?</router-link>
      </div>
      <span>or</span>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</template>

<script>
import SocialLogin from "../components/SocialLogin.vue";
import firebase from "firebase/compat/app";
import { useRouter } from "vue-router";
import toastr from "toastr";

export default {
  name: "Login",
  components: {
    SocialLogin,
  },
  data() {
    return {
      email: "",
      password: "",
      alert: false,
      registered: true,
      router: useRouter(),
    };
  },
  methods: {
    loginWtihEmail() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          setTimeout(() => {
            this.router.replace("/chat");
          }, 1000);
        })
        .catch((err) => {
          if (
            err.code == "auth/invalid-email" ||
            err.code == "auth/user-not-found"
          ) {
            toastr["error"]("Invalid email or does not exist", "Error");
          } else {
            toastr["error"](
              "The password is invalid or the user does not have a password",
              "Error"
            );
          }
        });
    },
  },
};
</script>

<style lang="scss" src="../styles/Login.scss"></style>
