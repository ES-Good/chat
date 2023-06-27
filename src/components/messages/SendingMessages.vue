<template>
  <form @keyup.enter.exact="submit" class="sending-messages-form">
        <textarea v-model="textUser" @keydown="showDownButton" placeholder="Введите сообщение" class="sending-messages-form__textaria"></textarea>
        <button @click.prevent="submit" class="sending-messages-form__button">Отправить</button>
  </form>
</template>

<script>
import {sendMessage} from '@/services/setMessages'

export default {
    name: 'SendingMessages',
    data(){
        return{
            textUser: '',
            key: ''
        }
    },
    emits:['messageSent'],
    methods:{
        submit(){
            sendMessage(this.textUser.trim())
            this.textUser = ''
        }
    }
}
</script>
