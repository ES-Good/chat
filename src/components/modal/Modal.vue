<template>
    <div class="owerlay-modal" @click.self="$emit('closeModal')">
        <div class="modal">
            <slot></slot>
            <button class="button-close-modal" title="Закрыть" @click.self="$emit('closeModal')">Close Modal</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal'
}
</script>

<style>
</style>