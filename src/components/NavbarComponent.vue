<template>
    <div class="w-full h-[70px] shadow-xl flex justify-center items-center">
        <div class="max-w-[1280px] flex justify-center items-center">
            <div class="mr-[15rem] flex justify-center items-center text-main-color">
                <router-link to="/" class="flex justify-center items-center">
                    <img class="w-[28px] h-[35px] mr-1" src="../assets/Logo.png" alt="logo">
                    <h1 class="font-bold">Houzing</h1>
                </router-link>
            </div>
            <div>
                <ul class="flex justify-center items-center mr-[15rem]">
                    <li
                        class="mr-6 hover:-translate-y-1 transition-all duration-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <a href="#"><router-link to="/buy">Buy</router-link></a></li>
                    <li
                        class="mr-6 hover:-translate-y-1 transition-all duration-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <a href="#">Rent</a></li>
                    <li
                        class="mr-6 hover:-translate-y-1 transition-all duration-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <a href="#">Sell</a></li>
                    <li
                        class="hover:-translate-y-1 transition-all duration-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <a href="#">Dashboard</a>
                    </li>
                </ul>
            </div>
            <div>
                <el-button type="primary" round>
                  <router-link to="/chat">Chat</router-link>
                </el-button>
                <el-button v-if="!accessToken" type="primary" round><router-link to="/login">Get Started</router-link></el-button>
                <el-button v-if="accessToken" type="info" round @click="logout">Log out</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { ElButton, ElMessageBox } from 'element-plus';

export default {
    name: 'NavbarComponent',
    components: {
        ElButton,
    },
    computed: {
      accessToken() {
        return this.$store.getters['authModule/getAccessToken'];
      }
    },
  methods: {
    logout() {
      ElMessageBox.confirm('Are you sure want to logout?')
          .then(() => {
            this.$store.dispatch('authModule/logout');
          });
    }
  }
}
</script>
