<script>

import { RouterView } from 'vue-router'
import Header from './components/Header.vue'

export default {
  components: {
    Header
  },
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    handleLoginSuccess() {
      this.isLoggedIn = true;
    },
    handleLogout() {
      this.isLoggedIn = false;
    }
  }
}

</script>

<template>
 <Header :isLoggedIn="isLoggedIn" @logout="handleLogout" />
  <router-view @login-success="handleLoginSuccess" />
</template>
