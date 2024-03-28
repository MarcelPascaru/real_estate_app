<template>
    <NavbarComponent/>
    <div class="flex justify-center items-center mt-[12rem]">
        <div class="flex flex-col justify-center items-center p-10 bg-[#F5F5F5] rounded-[0.5rem] shadow-xl">
            <div class="flex justify-center items-center text-3xl text-main-color mb-10">
                <el-icon><Avatar /></el-icon>
                <h1 class="ml-2 text-2xl">Log in to your account</h1>
            </div>
            <div class="w-full">
                <div>
                <label class="text-lg mr-3"><span class="text-main-color mr-1">*</span>Email</label>
                <input class="mb-5 border-none w-full mt-2" type="email" v-model="email" placeholder="Enter your email...">
            </div>
            <div >
                <label class="text-lg mr-3"><span class="text-main-color mr-1">*</span>Password</label>
                <input class="mb-5 border-none w-full mt-2" type="password" v-model="password" placeholder="Enter your password...">
            </div>
            <el-button type="primary" round class="w-full mb-5" @click="login">Login</el-button>
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
import { ElIcon, ElButton } from 'element-plus';
import { Avatar, Right } from '@element-plus/icons-vue';
import NavbarComponent from './NavbarComponent.vue';
import { RouterLink } from 'vue-router';

export default {
    name: 'LoginComponent',
    components: {
        ElIcon,
        ElButton,
        Avatar,
        NavbarComponent,
        RouterLink,
        Right,
    },
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Send login request and handle authentication token
            // Store token in local storage
        }
    }
};
</script>