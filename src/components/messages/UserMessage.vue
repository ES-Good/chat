<template>
    <div class="user-message">
        <div class="user-message__header">
            <p class="user-message__name-user">
                <slot name="name-user">
                    По каким то причинам имя недоступно...
                </slot>
            </p>
            
        </div>

        <p class="user-message__text">
            <slot name="text-message">
                По каким то причинам сообщение недоступно...
            </slot>
        </p>
    </div>
</template>

<script>
export default {
    emits:['pushMessage']
}
</script>