<template>
    <div class="mt-[15rem] w-full h-[730px] bg-[#E9F3FF]">
        <el-carousel :interval="5000" arrow="always">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="bg-white p-5 w-[460px] h-[360px] rounded-[0.5rem] shadow-xl">
                    <el-icon>
                        <Comment class="w-[55px] h-[55px] text-main-color mb-3" />
                    </el-icon>
                    <p class="text-sm text-slate-gray mb-6">
                        I could probably go into sales for you. I
                        am completely blown away. After
                        using SEO my business skyrocketed!
                        The very best.
                    </p>
                    <div class="flex jsutify-center items-center">
                        <img class="mr-2" src="../assets/Avatar1.png" alt="avatar1">
                        <div>
                            <h2 class="font-bold mb-1">Grace Hill</h2>
                            <span>Customer</span>
                        </div>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { Comment } from '@element-plus/icons-vue';

export default {
    name: 'TestimonialsComponent',
    components: {
        ElCarousel,
        ElCarouselItem,
        Comment,
    },
    data: (() => {

    })
}
</script>
