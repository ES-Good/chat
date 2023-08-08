<template>
    <div class="messages-wrapper">
        <div class="messages-container">
            <user-message :message="item" :class="{ 'my-message' : item.name === user}" v-for="item in messagesUsers" :key="item.id">
                <template v-slot:name-user >
                    {{ item.name }}
                </template>
                <template v-slot:user-ico v-if="item.admin">
                    <img class="user-logo" src="../../assets/img/admin-logo.gif" alt="">
                </template>
                <template v-slot:text-message >
                    {{ item.text }}
                </template>
            </user-message>

        </div>
    </div>

</template>

<script>

import UserMessage from './UserMessage.vue';
import { ThisIsAdmin } from "@/services/user/chackForAdmin";

export default {
    name: 'ShowMessages',
    components:{
        UserMessage
    },
    props:{
        messagesUsers: Object
    },

    computed:{
        user(){
            return localStorage.getItem('user')
        }
    },
    
}

</script>
