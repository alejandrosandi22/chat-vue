<template>
    <div class="auth-container">
        <LoginComponent/>
    </div>
</template>

<script>
import LoginComponent from '../../components/LoginComponent/LoginComponent.vue'

export default ({
    name: 'AuthComponent',
    components:{
        LoginComponent,
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