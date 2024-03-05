<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            isDropdownOpen: false,
            selectedOption: null,
        };
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
        handleOptionClick(option) {
            this.selectedOption = option;
            this.isDropdownOpen = false;
        },
        login() {
            
        }
    }
}
</script>


<template>
    <nav class="overflow-x-hidden">
        <div class="flex h-[100px] bg-[#0a1128] text-white justify-between items-center p-[10px]">
            <div class="mr-[10px]">
                <RouterLink to="/">
                    <img class="h-[60px] w-[70px] md:max-w-none md:h-[100px] md:w-[100px]"
                        src="../assets/logo-ec.png" alt="logo-e-commerce">
                </RouterLink>
            </div>
            <div class="hidden min-[480px]:flex mr-[20px]">
                <a class="border-[1px] border-white p-[7px] rounded-md text-xl font-serif" href="/">Home</a>
            </div>
            <div>

                <div class="flex justify-center items-center">

                    <div>
                        <ul class="flex">
                            <li><RouterLink to="./about" class=" text-xl font-serif hover:text-2xl max-[600px]:mr-[10px] ml-[20px] border-[1px] border-white rounded-md p-[7px]"
                                    >About us</RouterLink></li>

                        </ul>
                    </div>

                    <form class="flex justify-end items-center">
                        <div class="hidden max-[600px]:flex">
                            <a href=""><img class="h-[30px] w-[30px] mt-[5px] mr-[20px] rounded-sm"
                                    src="../assets/lente.svg" alt="immagine-lente-ricerca"></a>
                        </div>
                        <input class="hidden min-[600px]:flex w-[100%] h-[100%] ml-[15px] mr-[10px] rounded-[20px]"
                            type="text" placeholder="Ricerca">
                    </form>
                    <div class="hidden min-[730px]:flex justify-center items-center">
                        <a class="mr-[15px] text-xl font-serif font-semibold border-[1px] border-white p-[7px] rounded-md hover:text-purple-400"
                            href="">Carrello</a>
                        <RouterLink  to="./login" class="text-xl font-serif font-semibold border-[1px] border-white p-[7px] rounded-md  hover:text-purple-400"
                           >Login</RouterLink>
                    </div>

                    <div class="hidden max-[730px]:flex">
                        <button class="bg-blue-500 text-white px-3 py-1 rounded" @click="toggleDropdown">
                            Opzioni
                            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>

                        <div v-if="isDropdownOpen" class="absolute mt-1 bg-white border rounded-md shadow-md z-20">
                            <RouterLink to="./login" class="block px-2 py-1 text-gray-800 hover:bg-blue-100"
                                @click="handleOptionClick('Opzione 1')">Login</RouterLink>
                            <RouterLink to="#" class="block px-2 py-1 text-gray-800 hover:bg-blue-100"
                                @click="handleOptionClick('Opzione 2')">Carrello</RouterLink>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </nav>
</template>