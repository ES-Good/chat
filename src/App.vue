<template>
  <div class="container-fluid">
    <button 
    v-if="isAdmin"
    @click="openSidebarAdmin"
    :class="{'button-sidebar-admin_active': statusSidebarAdmin}" 
    class="button-sidebar-admin">
    <span class="button-sidebar-admin__line"></span>
    </button>

    <SidebarAdmin 
    v-if="isAdmin"
    :open="statusSidebarAdmin"/>

    <div class="container content">
      <Header 
      @openModalLogin="showModalLogin"
      @openModalRegistration="showModalRegistration"/>

      <MessageContainer/>

      <modal :class="{ 'modal-show' : openModal}" @closeModal="closeModal">

        <LoginUser v-if="modalLogin"/>

        <RegistrationUser v-else/>
        
      </modal>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MessageContainer from './components/messages/MessageContainer.vue';
import LoginUser from './components/user/LoginUser.vue';
import Modal from './components/modal/Modal.vue';
import RegistrationUser from './components/user/RegistrationUser.vue';
import { promiseChackLoginAdmin } from "./services/user/chackForAdmin";
import SidebarAdmin from './components/SidebarAdmin.vue';


export default {
  name: 'App',
  components: {
    MessageContainer,
    Modal,
    Header,
    LoginUser,
    RegistrationUser,
    SidebarAdmin
},
  data(){
    return{
      openModal: false,
      modalLogin: true,
      name: '',
      statusSidebarAdmin:true,
      isAdmin:false
    }
  },
  methods:{
    showModalLogin(){
      this.openModal = true
      this.modalLogin = true
    },
    showModalRegistration(){
      this.openModal = true
      this.modalLogin = false
    },
    closeModal(){
      this.openModal = false
    },
    openSidebarAdmin(){
      this.statusSidebarAdmin = !this.statusSidebarAdmin
    }
  },
  async mounted(){
    promiseChackLoginAdmin.then(res => this.isAdmin = res)
  }
}
</script>