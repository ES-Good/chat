<template>
    <div class="message-block">
      <ShowMessages :messagesUsers="messages" />
      <SendingMessages />
    </div>
  </template>
  
  <script>
  import SendingMessages from './SendingMessages.vue'
  import ShowMessages from './ShowMessages.vue'
  
  import { messageUpdate } from '@/services/getMessages'
  import { ref } from "vue";
  
  export default {
    name: 'MessageContainer',
    components: {
      ShowMessages,
      SendingMessages
    },
    setup(){    
  
      let messages = ref(null);
  
      messageUpdate(messages)
  
      return{
          messages,
      }
    }
  }
  </script>