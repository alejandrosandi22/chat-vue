<template>
    <ChatComponent style="display: none"></ChatComponent>
    <ProfileComponent></ProfileComponent>
</template>

<script>
import ChatComponent from '../../components/ChatComponent/ChatComponent.vue';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent.vue';

export default {
    name: 'Chat',
    components:{
        ChatComponent,
        ProfileComponent,
    }
}
</script>

<style lang="scss" src="./Chat.scss"></style>