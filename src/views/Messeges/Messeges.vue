<template>
    <NavComponent></NavComponent>
    <ChatComponent></ChatComponent>
</template>

<script>
import ChatComponent from '../../components/ChatComponent/ChatComponent.vue';
import NavComponent from '../../components/shared/NavComponent/NavComponent.vue';

export default {
    name: 'Chat',
    components:{
        ChatComponent,
        NavComponent,
    },
}
</script>
