<template>
    <div class="w-full h-[70px] shadow-xl flex justify-center items-center fixed">
        <div class="max-w-[1280px] flex justify-center items-center">
            <div class="mr-[15rem] flex justify-center items-center text-main-color">
                <a href="#">
                    <!-- <font-awesome-icon icon="fa-solid fa-house-chimney-crack" /> -->
                    <h1 class="font-bold">Houzing</h1>
                </a>
            </div>
            <div>
                <ul class="flex justify-center items-center mr-[15rem]">
                    <li
                        class="mr-6 hover:-translate-y-1 transition-all duration-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <a href="#">Buy</a></li>
                    <li
                        class="mr-6 hover:-translate-y-1 transition-all duration-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <a href="#">Rent</a></li>
                    <li
                        class="mr-6 hover:-translate-y-1 transition-all duration-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <a href="#">Sell</a></li>
                    <li
                        class="hover:-translate-y-1 transition-all duration-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">
                        <a href="#">Dashboard</a>
                    </li>
                </ul>
            </div>
            <div>
                <button
                    class="mr-4 p-2 bg-main-color text-white rounded-[1rem] hover:bg-black transition-all duration-300">Get
                    Started</button>
            </div>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faHouseChimneyCrack } from '@fortawesome/free-solid-svg-icons';

export default {
    name: 'NavbarComponent',
    
}
</script>
