<template>
    <div class="auth-container">
        <LoginComponent v-if="registered"></LoginComponent>
        <SignUpComponent v-if="!registered"></SignUpComponent>
    </div>
</template>

<script>
import LoginComponent from '../../components/LoginComponent/LoginComponent.vue';
import SignUpComponent from '../../components/SignUpComponent/SignUpComponent.vue';

export default ({
    name: 'Auth',
    components:{
        LoginComponent,
        SignUpComponent,
    },
    data(){
        return{
            registered: false,
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