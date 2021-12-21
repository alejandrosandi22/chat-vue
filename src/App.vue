<template>
  <div>
    <Chat/>
  </div>
</template>

<script>
import Auth from './views/Auth/Auth.vue'
import Chat from './views/Chat/Chat.vue'

export default {
  name: 'App',
  components: {
    Auth,
    Chat,
  }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
