<template>


  <div
      class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700">
    <div class="w-full max-w-md bg-white/80 backdrop-blur-md shadow-xl rounded-xl p-10 space-y-6">

      <div class="text-center text-gray-900 space-y-6">
        <h1 class="text-3xl font-bold text-gray-800 ">Xush kelibsiz</h1>
        <p class="text-sm text-gray-600 leading-tight"> Davom etish uchun tizimga kiring yoki ro'yxatdan o'ting</p>
      </div>

      <div class="flex items-center justify-center gap-6">

        <router-link to="/login">
          <button
              type="button"
              class=" flex items-center gap-2 py-2.5 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 shadow-xl">
            <span>🔐</span>Login
          </button>
        </router-link>

        <router-link to="/signup">
          <button
              type="button"
              class="flex items-center gap-2 py-2.5 px-6 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-200 shadow-xl">
            <span>📝</span>Signup
          </button>
        </router-link>
      </div>
      <h2 class="flex items-center justify-center text-blue-500">Tizimga kirish uchun </h2>

    </div>

  </div>
</template>
<script setup lang="ts">

</script>

<style scoped>

</style>