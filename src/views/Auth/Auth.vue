<template>
    <div class="auth-container">
        <LoginComponent @receiveConfirmation="confirmRegistered" v-if="registeredUser"></LoginComponent>
        <SignUpComponent @receiveConfirmation="confirmRegistered" v-if="!registeredUser"></SignUpComponent>
    </div>
</template>

<script>
import LoginComponent from '../../components/LoginComponent/LoginComponent.vue';
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent.vue';

export default ({
    name: 'Auth',
    data(){
        return{
            registeredUser: true
        }
    },
    components:{
        LoginComponent,
        SignUpComponent,
    },
    methods:{
        confirmRegistered(value){
            this.registeredUser = value;
        }
    }
})
</script>

<style lang="scss">
    .auth-container{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
</style>