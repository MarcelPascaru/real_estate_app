<template>
    <div class="w-full flex justify-center items-center h-[560px] bg-secondary-color p-8 mt-[15rem]">
        <div class="w-[1150px] flex justify-between items-start">
            <div class="w-[300px] mr-15">
                <div class="flex justify-start items-center mb-10">
                    <img class="w-[28px] h-[35px] mr-1" src="../assets/Logo.png" alt="logo">
                    <h1 class="font-bold text-main-color text-2xl">Houzing</h1>
                </div>
                <p class="mb-5 text-white">Lorem Ipsum is simply dummy text of the<br />
                    and typesetting industry. Lorem Ipsum is<br />
                    dummy text of the printing.</p>
                <div class="flex justify-start items-center">
                    <a href="#" class="mr-4">
                        <img class="" src="../assets/facebook.png" alt="facebook">
                    </a>
                    <a href="#" class="mr-4">
                        <img src="../assets/instagram.png" alt="instagram">
                    </a>
                    <a href="#" class="mr-4">
                        <img src="../assets/twitter.png" alt="twitter">
                    </a>
                    <a href="#">
                        <img src="../assets/linkedin.png" alt="linkedin">
                    </a>
                </div>
            </div>
            <div class="flex flex-col">
                <h1 class="text-xl text-white mb-6 font-bold">Quick Links</h1>
                <ul class="text-white">
                    <li class="mb-3 text-lg hover:text-main-color transition-all duration-300"><a href="#">Buy</a></li>
                    <li class="mb-3 text-lg hover:text-main-color transition-all duration-300"><a href="#">Rent</a></li>
                    <li class="mb-3 text-lg hover:text-main-color transition-all duration-300"><a href="#">Sell</a></li>
                    <li class="text-lg hover:text-main-color transition-all duration-300"><a href="#">Dashboard</a></li>
                </ul>
            </div>
            <div class="flex flex-col">
                <h1 class="text-xl text-white mb-6 font-bold">Services</h1>
                <ul class="text-white">
                    <li class="mb-3 text-lg">Login</li>
                    <li class="mb-3 text-lg">Buy/Rent A Home</li>
                    <li class="mb-3 text-lg">Sell A Home</li>
                    <li class="mb-3 text-lg">Virtual Chat</li>
                </ul>
            </div>
            <div class="flex flex-col">
                <h1 class="text-xl text-white mb-6 font-bold">Contact</h1>
                <ul class="text-white text-sm">
                    <li class="flex justify-start items-start mb-3">
                        <el-icon><Location class="w-[25px] h-[25px] mr-1"/></el-icon>
                        <span>str.Studentilor 1, mun.Chisinau<br/>Republica Moldova</span>
                    </li>
                    <li class="flex justify-start items-start mb-3">
                        <el-icon><Iphone class="w-[25px] h-[25px] mr-1"/></el-icon>
                        <span>+11 2 3456 7890</span>
                    </li>
                    <li class="flex justify-start items-start">
                        <el-icon><Message class="w-[25px] h-[25px] mr-1"/></el-icon>
                        <span>houzingadmin@gmail.com</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Location } from '@element-plus/icons-vue';
import { Iphone } from '@element-plus/icons-vue';
import { Message } from '@element-plus/icons-vue';

export default {
    name: 'FooterComponent',
    components: {
        Location,
        Iphone,
        Message,
    }
}
</script>
