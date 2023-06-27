<template>
  <header class="header">
    <div class="header__button-box" v-if="!userInfo">
      <button class="button button_header" @click="$emit('openModalLogin')">Войти</button>
      <button class="button button_header" @click="$emit('openModalRegistration')">Зарегестрироватся</button>
    </div>
    <h1 class="title" v-else>{{ userInfo }}</h1>
  </header>
</template>

<script>
import { userLoginVerification } from "@/services/user/loginVerification";
import { ref } from "vue";

export default {
  name:'Header',
  emits: ['openModalLogin', 'openModalRegistration'],
  setup(){
    let userInfo = ref(null)

    userLoginVerification(userInfo)
    return{
      userInfo
    }
  }
}
</script>

<style>

</style>