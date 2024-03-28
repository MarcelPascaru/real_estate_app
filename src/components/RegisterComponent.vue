<template>
    <NavbarComponent />
    <div class="flex justify-center items-center mt-[6rem]">
        <div class="flex flex-col justify-center items-center p-10 bg-[#F5F5F5] rounded-[0.5rem] shadow-xl">
            <div class="flex justify-center items-center text-3xl text-main-color mb-10">
                <el-icon>
                    <Avatar />
                </el-icon>
                <h1 class="ml-2 text-2xl">Let's register an account now especially for you</h1>
            </div>
            <div class="w-full">
                <div>
                    <label class="text-lg mr-3"><span class="text-main-color mr-1">*</span>Your Name</label>
                    <input class="mb-5 border-none w-full mt-2" type="text" placeholder="Enter your name...">
                </div>
                <div>
                    <label class="text-lg mr-3"><span class="text-main-color mr-1">*</span>Email</label>
                    <input class="mb-5 border-none w-full mt-2" type="email" v-model="email" placeholder="Enter your email...">
                </div>
                <div>
                    <label class="text-lg mr-3"><span class="text-main-color mr-1">*</span>Password</label>
                    <input class="mb-5 border-none w-full mt-2" type="password" v-model="password"
                        placeholder="Enter your password...">
                </div>
                <div>
                    <label class="text-lg mr-3"><span class="text-main-color mr-1">*</span>Confirm password</label>
                    <input class="mb-5 border-none w-full mt-2" type="password" placeholder="Confirm your password...">
                </div>
                <el-button type="primary" round class="w-full mb-5 mt-5" @click="register">Register</el-button>
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
    name: 'RegisterComponent',
    components: {
        ElIcon,
        ElButton,
        Avatar,
        NavbarComponent,
        RouterLink,
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