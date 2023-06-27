<template>
  <div class="form-container" >
    <form class="form-modal" v-if="!registered" @submit.prevent="RegistrationUser">
      <input v-model="email" type="text" placeholder="E-mail" class="form-modal__input">
      <input v-model="password" type="password" name="" placeholder="Пароль" autocomplete="current-password" class="form-modal__input">
      <p v-if="errorText" class="form-modal__error-text">{{ errorText }}</p>
      <button class="button">Зарегестрироватся</button>
    </form>
    <p class="form-container__registered-text" v-else>Вы зарегестрировались как {{ email }}</p>
  </div>

</template>
  
<script>
  import { newUser } from '../../services/user/RegistrationUser';
  import { chackBeingUser } from '../../services/user/chackBeingEmail';
  import { validateEmail } from "../../helpers/validateEmail";
  import { validatePass } from "../../helpers/validatePass";

  export default {
      name: 'RegistrationUser',
      data(){
        return{
          email: '',
          password: '',
          errorText: '',
          registered: false
        }
      },
      methods:{
        async RegistrationUser(){
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
          let chackUser = await chackBeingUser(this.email, this.password)

          if (chackUser) {
            this.errorText = 'Такой пользователь уже существует';
            return
          }

          newUser(this.email, this.password)

          this.registered = true;
        }
      }
  }
</script>
