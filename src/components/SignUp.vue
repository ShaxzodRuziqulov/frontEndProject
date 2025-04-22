<template>

  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm bg-white shadow-md rounded-lg p-8">
      <h2 v-if="step === 1 " class="text-2xl font-semibold text-center text-red-600 mb-5">
        Ro'yxatdan o'tish
      </h2>

      <form v-if="step===1" @submit.prevent="handleSignup" class="flex flex-col space-y-4">
        <input
            v-model="form.fullName"
            placeholder="To'liq ism"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
        <input
            v-model="form.userName"
            placeholder="userName"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
        <input
            v-model="form.email"
            placeholder="email"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
        <input
            v-model="form.password"
            placeholder="password"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
        <button class=" w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
                type="submit"
        >Ro'yhatdan o'tish
        </button>
        <a href="/login" class="text-blue-600 hover:text-blue-700 text-center">Sign In</a>
      </form>

      <form v-if="step===2" @submit.prevent="handleVerifyEmail "
            class="flex flex-col space-y-4">
        <h2 class="text-2xl font-semibold text-center">Email tasdiqlash</h2>
        <input
            v-model="verificationCode"
            placeholder="Tasdiqlash kodi"
            required
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
        <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300"
                type="submit">Tasdiqlash
        </button>
      </form>
      <p class="justify-center text-center font-medium"
         v-if="message" :class="{'text-green-600': step === 1, 'text-red-600': step === 2 &&
         message.includes('notug')}">
        {{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import type {RegisterUser} from "../type/User.ts";
import {AuthService} from "../AuthService.ts";
import {useRouter} from "vue-router";

const form = ref<RegisterUser>({
  fullName: "",
  email: "",
  userName: "",
  password: ""
})
const step = ref(1)
const verificationCode = ref('')
const message = ref('')
const router = useRouter()

const handleSignup = async () => {
  try {
    await AuthService.signup(form.value)
    message.value = ` Xush kelibsiz .Emailizga tasdiqlash kodi junatildi ,tizimga kirish uchun iltimos tasdiqlang`
    step.value = 2
  } catch (e) {
    console.error(e)
    message.value = "Xatolik yuz berdi"
  }
}
const handleVerifyEmail = async () => {
  try {
    await AuthService.verifyEmail(
        {
          code: verificationCode.value,
        }
    )
    message.value = "Emailingiz muvaffaqiyatli tasdiqlandi"

    form.value = {fullName: "", userName: "", email: "", password: ""}
    verificationCode.value = ""
    await router.push({name: "Home"})
  } catch (e) {
    console.error(e)
    message.value = "Kod notug'ri kiritilgan"
  }
}
</script>
<style scoped>

</style>
