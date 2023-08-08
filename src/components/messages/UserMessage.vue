<template>
    <div class="user-message">
        <div class="user-message__header">
            <p class="user-message__name-user">
                <slot name="name-user">
                    По каким то причинам имя недоступно...
                </slot>
            </p>
            <slot name="user-ico"></slot>
        </div>

        <p class="user-message__text">
            <slot name="text-message">
                По каким то причинам сообщение недоступно...
            </slot>
        </p>

        <btnDelMessage v-if="thisAdmin" :idMassege="message.id"/>
        
    </div>
</template>

<script>
import btnDelMessage from './btnDelMessage.vue';
import { ThisIsAdmin } from "@/services/user/chackForAdmin";

export default {
    components: { 
        btnDelMessage 
    },
    emits:['pushMessage'],
    props:{
        message: Object
    },
    computed:{
        thisAdmin(){
            return ThisIsAdmin
        }
    },
}
</script>