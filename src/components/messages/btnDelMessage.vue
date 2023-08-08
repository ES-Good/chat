<template>
  <button 
    class="button-del button-del_user-message"
    @click="delMessage">del</button>
</template>

<script>
import { removeMessage } from "@/services/admin/deleteMessage";

export default {
    name:'btnDelMessage',
    props:{
        idMassege: String
    },
    methods:{
        delMessage(){
            removeMessage(this.idMassege)
        }
    },
    computed:{
        thisAdmin(){
            return ThisIsAdmin
        }
    },
}
</script>

<style>

</style>