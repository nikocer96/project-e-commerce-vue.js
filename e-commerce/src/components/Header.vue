<script>

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
    },
};
</script>


<template>
    <nav class="overflow-x-hidden">
        <div class="flex h-[100px] bg-[#0a1128] text-white justify-between items-center p-[10px]">
            <div>
                <img class="h-[100px] w-[100px]" src="../assets/logo-ec.png" alt="logo-e-commerce">
            </div>

            <div>
                <div class="flex justify-center items-center">
                    <div>
                        <ul class="flex">
                            <li><a class=" text-3xl font-semibold font-serif hover:text-4xl max-[700px]:text-2xl max-[600px]:mr-[20px]"
                                    href="/about">About us</a></li>

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
                        <a class="text-xl font-serif font-semibold border-[1px] border-white p-[7px] rounded-md  hover:text-purple-400"
                            href="">Login</a>
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
                            <a href="#" class="block px-2 py-1 text-gray-800 hover:bg-blue-100"
                                @click="handleOptionClick('Opzione 1')">Login</a>
                            <a href="#" class="block px-2 py-1 text-gray-800 hover:bg-blue-100"
                                @click="handleOptionClick('Opzione 2')">Carrello</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </nav>
</template>