<template>
    <NavComponent></NavComponent>
    <ChatComponent ></ChatComponent>
    <ProfileComponent style="display: none"></ProfileComponent>
</template>

<script>
import ChatComponent from '../../components/ChatComponent/ChatComponent.vue';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent.vue';
import NavComponent from '../../shared/NavComponent/NavComponent.vue';

export default {
    name: 'Chat',
    components:{
        ChatComponent,
        ProfileComponent,
        NavComponent,
    }
}
</script>

<style lang="scss" src="./Chat.scss"></style>