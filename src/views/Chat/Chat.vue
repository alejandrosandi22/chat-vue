<template>
    <NavComponent @recivePage="recivePage"></NavComponent>
    <ChatComponent v-if="actualPage"></ChatComponent>
    <ProfileComponent v-if="!actualPage"></ProfileComponent>
</template>

<script>
import ChatComponent from '../../components/ChatComponent/ChatComponent.vue';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent.vue';
import NavComponent from '../../components/shared/NavComponent/NavComponent.vue';

export default {
    name: 'Chat',
    components:{
        ChatComponent,
        ProfileComponent,
        NavComponent,
    },
    data(){
        return{
            actualPage: true,
        }
    },
    methods:{
        recivePage(value){
            this.actualPage = value;
        }
    }
}
</script>
