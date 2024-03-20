<template>
    <div class="flex justify-center items-center mt-[15rem] relative">
        <div class="mr-20">
            <img class="rounded-tl-[2rem] rounded-br-[2rem]" src="../assets/about-us-img.jpg" alt="aboutusimg">
        </div>
        <div class="flex flex-col">
            <span class="text-main-color mb-8">ABOUT US</span>
            <h1 class="font-bold text-4xl mb-8">
                We're on a Mission to Change<br/>
                View of RealEstate Field.
            </h1>
            <p class="text-slate-gray mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit ux sed eiusmod tempor<br/>
                incididunt ut labore et dolore.enim admix minim veniam quis nostrud.</p>
            <div class="flex justify-center items-center mb-10">
                <div class="w-[50%]">
                    <img class="mb-2" src="../assets/house1.png" alt="">
                    <h2 class="mb-2">Modern Villa</h2>
                    <p class="text-sm text-slate-gray">When unknow printer took galley<br/> of type and scrambled.</p>
                </div>
                <div class="w-[50%]">
                    <img class="mb-2" src="../assets/money1.png" alt="">
                    <h2 class="mb-2">Secure Payment</h2>
                    <p class="text-sm text-slate-gray">When unknow printer took galley<br/> of type and scrambled.</p>
                </div>
            </div>
            <button class="w-[120px] p-2 bg-main-color text-white rounded-[1rem] hover:bg-black transition-all duration-300">Learn More</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUsComponent'
}
</script>
