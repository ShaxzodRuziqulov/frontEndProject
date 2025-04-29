<template>
  <div class="main">
    <div class="header">
      <Header/>
    </div>
    <div class="body">
      <div class="content pt-16">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
</script>


