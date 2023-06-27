<template>
  <div class="form-container" >
    <form class="form-modal" v-if="!login" @submit.prevent="loginUser">
      <input v-model="email" type="text" placeholder="E-mail" class="form-modal__input">
      <input v-model="password" type="password" name="" placeholder="Пароль" autocomplete="current-password" class="form-modal__input">
      <button class="button">Войти</button>
    </form>
    <p class="form-container__registered-text" v-else>Вы вошли как {{ email }}</p>
  </div>
</template>

<script>
import { signInUser } from "../../services/user/LoginUser";
import { validateEmail } from "../../helpers/validateEmail";
import { validatePass } from "../../helpers/validatePass";

export default {
    name: 'LoginUser',
    data(){
      return{
        email: '',
        password: '',
        errorText: '',
        login: false
      }
    },
    methods:{
        loginUser(){
          if (validateEmail(this.email) && validatePass(this.password)) {
            this.errorText = 'Некорректный email и пароль';
            return
          }
          else if (validateEmail(this.email)) {
            this.errorText = 'Не корректный email';
            return
          }else if (validatePass(this.password)) {
            this.errorText = 'Не корректный пароль, не менее 6 символов';
            return
          }

          signInUser(this.email, this.password)

          this.login = true;
        }
    }

}
</script>

<style>

</style>