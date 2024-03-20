<template>
    <div class="flex flex-col justify-center items-center mt-[15rem]">
        <span class="text-main-color mb-8">OUR SERVICES</span>
        <h1 class="font-bold text-4xl mb-8">Our Main Focus</h1>
        <div class="flex justify-center items-center w-full">
            <div
                class="flex flex-col justify-center items-center mr-15 w-[370px] h-[410px] p-5 rounded-[0.5rem] shadow-xl bg-white hover:-translate-y-3 hover:-translate-x-3 transition-all duration-300">
                <div class="rounded-full bg-white shadow-xl mb-5 w-[100px] h-[100px] flex justify-center items-center">
                    <img src="../assets/buy-home1.png" alt="buyhome">
                </div>
                <h2 class="text-2xl font-bold mb-3">Buy A Home</h2>
                <p class="text-sm text-slate-gray text-center mb-5">Over 1 million+ homes for sale available on
                    the<br />
                    website, we can match you with a house you will<br />
                    want to call home.</p>
                <el-button type="primary" round>Find A Home</el-button>
            </div>
            <div
                class="flex flex-col justify-center items-center mr-15 w-[370px] h-[410px] p-5 rounded-[0.5rem] shadow-xl bg-white hover:-translate-y-3 hover:-translate-x-3 transition-all duration-300">
                <div class="rounded-full bg-white shadow-xl mb-5 w-[100px] h-[100px] flex justify-center items-center">
                    <img src="../assets/house2.png" alt="house">
                </div>
                <h2 class="text-2xl font-bold mb-3">Rent A Home</h2>
                <p class="text-sm text-slate-gray text-center mb-5">Over 1 million+ homes for sale available on
                    the<br />
                    website, we can match you with a house you will<br />
                    want to call home.</p>
                <el-button type="primary" round>Find A Home</el-button>
            </div>
            <div
                class="flex flex-col justify-center items-center mr-15 w-[370px] h-[410px] p-5 rounded-[0.5rem] shadow-xl bg-white hover:-translate-y-3 hover:-translate-x-3 transition-all duration-300">
                <div class="rounded-full bg-white shadow-xl mb-5 w-[100px] h-[100px] flex justify-center items-center">
                    <img src="../assets/sale1.png" alt="buyhome">
                </div>
                <h2 class="text-2xl font-bold mb-3">Sell A Home</h2>
                <p class="text-sm text-slate-gray text-center mb-5">Over 1 million+ homes for sale available on
                    the<br />
                    website, we can match you with a house you will<br />
                    want to call home.</p>
                <el-button type="primary" round>Find A Home</el-button>

            </div>
        </div>
    </div>
</template>

<script>
import { ElButton } from 'element-plus';

export default {
    name: 'ServicesComponent',
    components: {
        ElButton,
    }
}
</script>
