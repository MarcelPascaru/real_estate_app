<template>
    <div
        class="flex flex-col text-center justify-center items-center absolute top-[72%] left-[59%] bg-white rounded-[0.5rem]">
        <div class="w-[260px] h-[180px] shadow-xl p-5">
            <h3 class="text-sm text-slate-gray mb-2">Buy Your Dream House</h3>
            <span class="font-bold text-2xl text-main-color mb-2">80+</span>
            <h3 class="text-sm text-slate-gray mb-2">Home Available</h3>
            <el-button type="primary" round>View Details</el-button>
        </div>
    </div>
</template>

<script>
import { ElButton } from 'element-plus';

export default {
    name: 'BuyDetailsComponent',
    components: {
        ElButton,
    }
}
</script>
