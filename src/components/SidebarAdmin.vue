<template>
  <div class="sidebar-admin" :class="{'sidebar-admin_open' : open}">
    <div class="sidebar-admin__inner">
      <AllUsers/>
    </div>
  </div>
</template>

<script>
import AllUsers from './admin/AllUsers.vue'

export default {
  name: 'SidebarAdmin',
  components: { AllUsers },
  props:{
    open: Boolean
  }
}
</script>

<style>

</style>