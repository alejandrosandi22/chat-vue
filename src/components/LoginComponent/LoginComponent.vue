<template>
    <div class="login-container">
      <div class="blur-background"></div>
      <div class="form-wrapper">
        <h2>Login</h2>
        <form class="form">
          <div class="email">
            <input type="email" id="email" class="input"  v-model="emailInput" :class="{'emptyInput': emailInput !== ''}">
            <label for="email" class="label-email">Email</label>
          </div>
          <div class="password">
            <input  type="password" id="password" class="input" v-model="passwordInput" :class="{'emptyInput': passwordInput !== ''}">
            <label for="password">Password</label>
          </div>
          <button class="submit"></button>
        </form>
        <div class="account">
          <a href="#">forget your password?</a>
          <a href="#">You do not have an account?</a>
        </div>
        <span>or</span>
        <button class="google"><i class="fab fa-google"></i>Login with Google</button>
        <button class="facebook"><i class="fab fa-facebook-f"></i>Login with Fcaebook</button>
      </div> 
    </div>    
</template>

<script>
export default {
  name: 'LoginComponent',
  data(){
    return{
      emailInput: '',
      passwordInput: '',
    }
  }
}
</script>

<style lang="scss" src="./LoginComponent.scss"></style>