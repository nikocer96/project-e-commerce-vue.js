<script>
import { RouterLink } from 'vue-router';
</script>


<template>
    <footer class="bg-[#0a1128]  shadow-[##B02E0C]  ">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="@/assets/logo5.png" class=" w-[200px] h[200px]" alt=" Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-[0.5px]">
                <li>
                    <RouterLink to="./about" class=" [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)] shadow-[#B02E0C] text-sm text-red-500  hover:text-white font-anta hover:underline me-4 md:me-6">About</RouterLink>
                </li>
                <li>
                    <a href="#" class=" [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)] shadow-[#B02E0C]  text-red-500 hover:text-white hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class=" [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)] shadow-[#B02E0C] text-red-500 hover:text-white hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class=" [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)] shadow-[#B02E0C]  text-red-500 hover:text-white  hover:underline ">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-red-500 sm:mx-auto lg:my-8" />
        <span class="block text-xs text-red-500  sm:text-center hover:text-white">© 2024 <a href= "" class="hover:underline">Room4Commerce™</a>. All Rights Reserved.</span>
    </div>
</footer>
</template>