<template>
    <div class="flex justify-center items-center  h-[100vh] bg-[#F4F9FF] relative">
        <div class="mr-[3rem]">
            <h1 class="text-6xl font-bold mb-[2rem]">Discover A Place<br/>
                you'll love to live</h1>
            <p class="text-slate-gray mb-[2rem]">Homie is a real estate soluation that gives you the local scoop about homes.<br/>
                Search confidently with your trusted source of homes for sale or rent.</p>
            <el-button type="primary" round>Make An Enquiry</el-button>
        </div>
        <div>
            <img src="../assets/intro-img.jpg" alt="introimg" class="rounded-tr-[2rem] rounded-bl-[2rem]">
        </div>
    </div>
</template>

<script>
import { ElButton } from 'element-plus';

export default {
    name: 'IntroContentComponent',
    components: {
        ElButton,
    }
}
</script>

<style lang="scss" scoped></style>