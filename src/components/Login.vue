<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
      <h2 class="text-2xl font-semibold text-center text-red-600 mb-6">
        Tizimga kirish</h2>
      <form @submit.prevent="handleSubmit" class='flex flex-col space-y-4'>
        <input
            type="email"
            id="email"
            placeholder="Email"
            v-model="form.email "
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
        <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="form.password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
        <button type="submit"
                class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300">
          Login
        </button>
        <a href="/auth" class="text-blue-600 hover:text-blue-700">Ortga</a>
        <a href="/signup" class="text-blue-600 hover:text-blue-700">Create new account</a>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";
import type {LoginUser} from "../type/User.ts";
import {AuthService} from "../AuthService.ts";

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