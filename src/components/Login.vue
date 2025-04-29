<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-50">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
      <div class="p-10">

        <h1 class="text-3xl font-bold text-gray-800 mb-2">
          Tizimga kirish
        </h1>
        <p class="text-sm text-gray-500 mb-6">
          Start your website in seconds. Don’t have an account?
          <a href="/signup" class="text-blue-600 hover:underline">Sign Up.</a>
        </p>
        <form @submit.prevent="handleSubmit" class='space-y-5'>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input
                type="email"
                id="email"
                placeholder="Email"
                v-model="form.email "
                required
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <input
                type="password"
                id="password"
                placeholder="Password"
                v-model="form.password"
                required
                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit"
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300">
            Sign in to your account
          </button>
        </form>
      </div>
      <div class="hidden md:flex items-center justify-center bg-gray-100">
        <img src="../assets/image_2025-04-29_10-56-28.png" alt="Illustration" class="max-w-1xs h-auto" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import type {LoginUser} from "../type/User.ts";
import {AuthService} from "../service/AuthService.ts";

const form = ref<LoginUser>({
  email: "",
  password: ""
});

const router = useRouter();

const handleSubmit = async () => {
  try {
    const response = await AuthService.login(form.value);

    localStorage.setItem("token", response?.token);
    console.log(response)
    await router.push({name: "Home"});
  } catch (error) {
    alert("Tizimga kirishda xatolik: Login yoki parolda hatolik bor");
  }
};
</script>

<style scoped>

</style>