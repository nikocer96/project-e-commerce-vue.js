<script>

import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Login from './views/Login.vue';

</script>

<template>
  <Header class="flex justify-end items-end">
      <router-link class="mr-[20px]" to="./Login">Login</router-link>
  </Header>
 <RouterView />
 <Footer />
</template>

