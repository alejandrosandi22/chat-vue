<template>
    <div class="sign-up-container">
      <div class="blur-background"></div>
      <div class="form-wrapper">
        <h2>Sign Up</h2>
        <div class="form-container">
            <form class="left-form">
                <div class="name">
                    <input type="text" id="name" class="input"  v-model="nameInput" :class="{'emptyInput': nameInput !== ''}">
                    <label for="name">Name</label>
                </div>
                <div class="email">
                    <input type="email" id="email" class="input"  v-model="emailInput" :class="{'emptyInput': emailInput !== ''}">
                    <label for="email">Email</label>
                </div>
                <div class="password">
                    <input type="password" id="password" class="input" v-model="passwordInput" :class="{'emptyInput': passwordInput !== ''}">
                    <label for="password">Password</label>
                </div>
            </form>
            <form class="right-form">
                <div class="last-name">
                    <input type="text" id="last-name" class="input"  v-model="lastNameInput" :class="{'emptyInput': lastNameInput !== ''}">
                    <label for="last-name">Last Name</label>
                </div>
                <div class="request-email">
                    <input type="email" id="request-email" class="input"  v-model="lastNameInput" :class="{'emptyInput': lastNameInput !== ''}">
                    <label for="request-email">Request Email</label>
                </div>
                <div class="request-password">
                    <input type="password" id="request-password" class="input" v-model="requestPasswordInput" :class="{'emptyInput': requestPasswordInput !== ''}">
                    <label for="request-password">Request Password</label>
                </div>
            </form>
        </div>
        <div clasS="actions">
            <button class="cancel"></button>
            <button class="submit"></button>
        </div>
        <div class="account">
          <a @click="emitRegistered()">Do you already have an account?</a>
        </div>
        <span>or</span>
        <button class="google"><i class="fab fa-google"></i>Sign Up with Google</button>
        <button class="facebook"><i class="fab fa-facebook-f"></i>Sign Up with Fcaebook</button>
      </div> 
    </div>  
</template>

<script>

export default ({
    name: 'SignUpComponent',
    data(){
        return{
            lastNameInput: '',
            nameInput: '',
            emailInput: '',
            passwordInput: '',
            requestPasswordInput: '',
            registered: true,
        }
    },
    methods:{
      emitRegistered(){
        this.registered = true;
        this.$emit('receiveConfirmation', this.registered);
      }
    }
})
</script>

<style lang="scss" src="./SignUpComponent.scss"></style>
