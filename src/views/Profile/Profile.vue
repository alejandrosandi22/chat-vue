<template>
    <NavComponent></NavComponent>
    <ProfileComponent></ProfileComponent>
</template>

<script>
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent.vue';
import NavComponent from '../../components/shared/NavComponent/NavComponent.vue';

export default {
    name: 'Chat',
    components:{
        ProfileComponent,
        NavComponent,
    },
}
</script>
