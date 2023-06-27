<template>
  <div class="container">
    <Header 
    @openModalLogin="showModalLogin"
    @openModalRegistration="showModalRegistration"/>

    <MessageContainer/>

    <modal :class="{ 'modal-show' : openModal}" @closeModal="closeModal">

      <LoginUser v-if="modalLogin"/>

      <RegistrationUser v-else/>
      
    </modal>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MessageContainer from './components/messages/MessageContainer.vue';
import LoginUser from './components/user/LoginUser.vue';
import Modal from './components/modal/Modal.vue';
import RegistrationUser from './components/user/RegistrationUser.vue';


export default {
  name: 'App',
  components: {
    MessageContainer,
    Modal,
    Header,
    LoginUser,
    RegistrationUser
  },
  data(){
    return{
      openModal: false,
      modalLogin: true,
      name: ''
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
    }
  }
}
</script>