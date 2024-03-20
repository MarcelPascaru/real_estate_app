<template>
    <div class="flex justify-center items-center mt-[15rem] p-5 h-[80vh]">
        <div class="w-[575px] h-full mr-10">
            <img class="w-[575px] h-[500px] rounded-tr-[2rem] rounded-bl-[2rem]" src="../assets/facilities-img.jpg" alt="">
        </div>
        <div class="w-[575px] h-full">
            <span class="text-main-color">OUR FACILITIES</span>
            <h1 class="font-bold text-4xl mb-8 mt-8">The experts in local and
                international property</h1>
            <p class="text-slate-gray mb-10">Agent hen an unknown printer took a galley of type and scramble
                d it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic.</p>
            <div class="flex justify-start items-center mb-10">
                <div class="mr-20">
                    <div class="flex justify-start items-center mb-2">
                        <img class="mr-2" src="../assets/Vector.png" alt="vector">
                        <span class="text-slate-gray">Parking Space</span>
                    </div>
                    <div class="flex justify-start items-center mb-2">
                        <img class="mr-2" src="../assets/Vector.png" alt="vector">
                        <span class="text-slate-gray">Swimming Pool</span>
                    </div>
                    <div class="flex justify-start items-center">
                        <img class="mr-2" src="../assets/Vector.png" alt="vector">
                        <span class="text-slate-gray">Private Security</span>
                    </div>
                </div>
                <div>
                    <div class="flex justify-start items-center mb-2">
                        <img class="mr-2" src="../assets/Vector.png" alt="vector">
                        <span class="text-slate-gray">Medical Center</span>
                    </div>
                    <div class="flex justify-start items-center mb-2">
                        <img class="mr-2" src="../assets/Vector.png" alt="vector">
                        <span class="text-slate-gray">Kids Playland</span>
                    </div>
                    <div class="flex justify-start items-center">
                        <img class="mr-2" src="../assets/Vector.png" alt="vector">
                        <span class="text-slate-gray">Library Area</span>
                    </div>
                </div>
            </div>
            <el-button type="primary" round>Read More</el-button>
        </div>
    </div>
</template>

<script>
import { ElButton } from 'element-plus';

export default {
    name: 'FacilitiesComponent',
    components: {
        ElButton,
    }
}
</script>
