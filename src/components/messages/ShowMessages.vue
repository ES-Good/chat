<template>
    <div class="messages-wrapper">
        <div class="messages-container">

            <user-message :class="{ 'my-message' : item.name === user}" v-for="item in messagesUsers" :key="item.id" :id="item.id">
                <template v-slot:name-user >
                    {{ item.name }}
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
    }
}

</script>
