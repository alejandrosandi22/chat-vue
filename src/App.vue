<template>
  <div>
    <AuthComponent/>
  </div>
</template>

<script>
import AuthComponent from './views/AuthComponent/AuthComponent.vue'
export default {
  name: 'App',
  components: {
    AuthComponent,
  }
}
</script>

<style lang="scss">
@import './App.scss';
</style>
