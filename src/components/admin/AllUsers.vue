<template>
    <div class="sidebar-admin__users-block">
        <select class="sidebar-admin__select" v-model="user">
          <option v-for="user in AllUsers" :key="user.uid" :value="user.uid">{{ user.name }}</option>
        </select>
        <p>Количество пользователей: <b>{{ AllUsersCount }}</b></p>
    </div>
</template>

<script>
import { getAllUsers } from "@/services/admin/allUsers";
export default {
    name: 'AllUsers',
    data(){
        return{
            AllUsers: null,
            user: null,
            AllUsersCount: null
        }
    },
    watch:{
        user(){
            console.log(this.user)
        }
    },
    async mounted(){
        let responseDataUsers = await getAllUsers()
        this.AllUsers = responseDataUsers
        this.AllUsersCount = Object.keys(this.AllUsers).length
        this.user = Object.values(responseDataUsers)[0].uid
    }
}
</script>

<style>

</style>