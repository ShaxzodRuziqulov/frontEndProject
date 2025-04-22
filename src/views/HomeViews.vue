<template>


  <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
      </a>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
                @submit.prevent
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
          </li>
          <li>
            <a
                @submit.prevent
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
          </li>
          <li>
            <a
                @submit.prevent
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
          </li>
          <li>
            <a
                @submit.prevent
                href="#"
                class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
          </li>
          <li>
            <a @submit.prevent
               @click="handleLogout"
               href="/auth"
               class="logout block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="flex flex-wrap items-center justify-between min-h-screen home-bg">
    <div class="flex flex-col items-center justify-center text-center px-4 py-20 gap-6">
      <h2 class="text-4xl font-bold text-white drop-shadow-md">
        Welcome to Our Platform
      </h2>
      <p class="text-lg text-gray-200 max-w-2xl leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium alias aliquam cum cumque deserunt dicta
        doloremque ea id, numquam pariatur, porro quaerat, quam quos repellat sunt vel voluptatem voluptatibus? </p>
    </div>

  </div>

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {logout} from "../router";

const router = useRouter()

function handleLogout() {
  logout()
  router.push('/login')
}


</script>
<style scoped>
.home-bg {
  background-image: url("../assets/ChatGPT Image 15 апр. 2025 г., 11_36_11.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>