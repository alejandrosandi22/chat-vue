<template>
  <router-view/>
</template>

<script>
import { onBeforeMount } from '@vue/runtime-core';
import { useRouter, useRoute } from 'vue-router';
import firebase from 'firebase/compat/app';

export default {
  setup(){
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if ((router.currentRoute._value.name === 'Messeges' || router.currentRoute._value.name === 'Profile') && !user) {
          router.replace('/login');
        }
      })
    })
  }
}
</script>

<style lang="scss">
@import "toastr";
</style>
