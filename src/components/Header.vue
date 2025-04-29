<script setup lang="ts">
import {logout} from "../router";
</script>

<template>
  <div
      class="fixed top-0 left-0 w-full h-16 px-6 bg-gray-800 text-white flex items-center justify-between z-50 shadow-md">
    <a href="/" class="text-2xl font-semibold whitespace-nowrap">Logo</a>

    <div class="flex items-center space-x-4">
      <router-link
          to="/"
          class="py-2 px-3 rounded-sm text-white hover:bg-gray-100 hover:text-black transition duration-200">
        Home
      </router-link>
      <router-link
          to="/about"
          class="py-2 px-3 rounded-sm text-white hover:bg-gray-100 hover:text-black transition duration-200">
        About
      </router-link>
      <router-link
          to="/contact"
          class="py-2 px-3 rounded-sm text-white hover:bg-gray-100 hover:text-black transition duration-200">
        Contact
      </router-link>
      <router-link
          to="/login"
          @click="logout()"
          class="py-2 px-3 rounded-sm text-white hover:bg-gray-100 hover:text-black transition duration-200">
        Logout
      </router-link>
    </div>
  </div>
</template>

<style scoped>



</style>
