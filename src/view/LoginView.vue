<template>
    <div class="flex justify-center items-center mt-[12rem]">
        <div class="flex flex-col justify-center items-center p-10 bg-[#E2EFFF] rounded-[0.5rem] shadow-xl">
            <div class="flex justify-center items-center text-3xl text-main-color mb-10">
                <el-icon><Avatar /></el-icon>
                <h1 class="ml-2 text-2xl">Log in to your account</h1>
            </div>
            <div class="w-full">
                <div>
                <label class="text-lg mr-3"><span class="text-main-color mr-1">*</span>Email</label>
                <input class="mb-5 border-none w-full mt-2" type="email" v-model="payload.email" placeholder="Enter your email...">
            </div>
            <div >
                <label class="text-lg mr-3"><span class="text-main-color mr-1">*</span>Password</label>
                <input class="mb-5 border-none w-full mt-2" type="password" v-model="payload.password" placeholder="Enter your password...">
            </div>
            <el-button type="primary" round class="w-full mb-5" @click="authLogin">Login</el-button>
            <div class="flex justify-center items-center">
                <span class="text-slate-gray mr-2">If you dosen't have an account, register here </span>
                <el-icon><Right /></el-icon>
                <el-button type="primary" round class="w-[120px] ml-2"><router-link to="/register">Register Now</router-link></el-button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
// UI components
import { ElIcon, ElButton, ElNotification} from 'element-plus';
import { Avatar, Right } from '@element-plus/icons-vue';

// Router
import { RouterLink } from 'vue-router';

// Request
import { login } from "@/services/auth/auth.service.js";
import router from "@/routes/router.js";

export default {
    name: 'LoginComponent',
    components: {
        ElIcon,
        ElButton,
        ElNotification,
        Avatar,
        RouterLink,
        Right,
    },
    data() {
        return {
            payload: {
              email: '',
              password: ''
            }
        };
    },
    methods: {
        async authLogin() {
            await login(this.payload)
                .then((response) => {
                  ElNotification({
                    title: 'Success',
                    message: 'Logged in successfully!',
                    type: 'success',
                  })
                  localStorage.setItem('accessToken', JSON.stringify(response.token));
                  router.push({name: 'home'});
                  this.$forceUpdate;

                })
                .catch((e) => {
                  ElNotification({
                    title: 'Error',
                    message: e,
                    type: 'error',
                  })
                });
        }
    }
};
</script>