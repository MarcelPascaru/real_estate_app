<template>
    <div class="w-full h-[730px] p-5 mt-[15rem] bg-[#E9F3FF]">
        <div class="flex justify-center items-center mt-[4rem]">
            <div class="w-[1160px]  flex justify-center items-center">
                <div class="text-center">
                    <div>
                        <span class="text-main-color mb-8">OUR TESTIMONIALS</span>
                        <h1 class="font-bold text-4xl mb-8">What Our Customers Says</h1>
                    </div>
                    <div class="flex justify-between items-center w-full mt-[6rem]">
                        <div class="w-[30%] text-left bg-white rounded-[0.5rem] shadow-xl p-5">
                            <p class="text-slate-gray mb-10">I could probably go into sales for you. I
                                am completely blown away. After
                                using SEO my business skyrocketed!
                                The very best.</p>
                            <div class="flex justify-start  items-center">
                                <img class="mr-5" src="../assets/Avatar1.png" alt="avatar1">
                                <div>
                                    <h2 class="font-bold mb-1">Grace Hill</h2>
                                    <span class="text-slate-gray">Customer</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-[30%] text-left bg-white rounded-[0.5rem] shadow-xl p-5">
                            <p class="text-slate-gray mb-10">I could probably go into sales for you. I
                                am completely blown away. After
                                using SEO my business skyrocketed!
                                The very best.</p>
                            <div class="flex justify-start  items-center">
                                <img class="mr-5" src="../assets/Avatar2.png" alt="avatar2">
                                <div>
                                    <h2 class="font-bold mb-1">Connor Walker</h2>
                                    <span class="text-slate-gray">Customer</span>
                                </div>
                            </div>
                        </div>
                        <div class="w-[30%] text-left bg-white rounded-[0.5rem] shadow-xl p-5">
                            <p class="text-slate-gray mb-10">I could probably go into sales for you. I
                                am completely blown away. After
                                using SEO my business skyrocketed!
                                The very best.</p>
                            <div class="flex justify-start  items-center">
                                <img class="mr-5" src="../assets/Avatar3.png" alt="avatar3">
                                <div>
                                    <h2 class="font-bold mb-1">Kira Wood</h2>
                                    <span class="text-slate-gray">Customer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ElCarousel, ElCarouselItem } from 'element-plus';
import { Comment } from '@element-plus/icons-vue';

export default {
    name: 'TestimonialsComponent',
    components: {
        Comment,
    },
    data: (() => {

    })
}
</script>
