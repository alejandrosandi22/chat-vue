<template>
    <div class="nav-container">
        <ul>
            <li data-content="profile" @click="page = false; emitPage()"><i class="fas fa-user-circle"></i></li>
            <li data-content="chat" @click="page = true; emitPage()"><i class="far fa-comment-dots"></i></li>
            <li data-content="logout" ><i class="fal fa-sign-out-alt"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavComponent',
    
    data(){
      return{
          page: true,
      }  
    },
    methods:{
        emitPage(){
            this.$emit('recivePage', this.page);
        }
    }
}
</script>

<style lang="scss" src="./NavComponent.scss" ></style>