<template>
  <router-link to="/"> accueil </router-link>  
  <router-link to="/conv" v-if="this.$store.state.user!= null"> | Conversation </router-link>

    <base-layout>
      <router-view />
    </base-layout>

</template>

<script>

import BaseLayout from './components/BaseLayout.vue'

export default {
  name: 'App',
  components: {
    BaseLayout,
  }
}


</script>

<style>


</style>
