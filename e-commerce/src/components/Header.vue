<script>
import { RouterLink } from 'vue-router';
import axios from 'axios'
import { computed } from 'vue';

export default {
    props: {
        isLoggedIn: Boolean
    },
    data() {
        return {
            isDropdownOpen: false,
            selectedOption: null,
            quantita: 0
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
        handleLogout() {
            this.$emit("logout");
            this.$router.push("./");
        }
    },
    async created() {
        await this.prendiProdotti();
    },
    computed: {
        async prendiProdotti() {
            try{
                const response = await axios.get('http://localhost:3000/prodotti');
                this.quantita = response.data.length;
                console.log(this.quantita);
                return this.quantita;
            }catch(error) {
                console.error("Errore durante la chiamata al json locale:", error)
            }
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
                        src="../assets/logo5.png" alt="logo-e-commerce">
                </RouterLink>
            </div>
            <div class="hidden min-[480px]:flex mr-[20px]">
                <RouterLink to="/" class="border-[1px] border-white p-[7px] rounded-md text-xl font-serif">Home</RouterLink>
            </div>
            <div>

                <div class="flex justify-center items-center">

                    <div>
                        <ul class="flex">
                            <li><RouterLink to="/about" class=" text-xl font-serif hover:text-2xl max-[600px]:mr-[10px] ml-[20px] border-[1px] border-white rounded-md p-[7px]"
                                    >About us</RouterLink></li>
                        </ul>
                    </div>

                    <form class="flex justify-end items-center">
                        <div class="hidden max-[600px]:flex">
                            <RouterLink to="#"><img class="h-[30px] w-[30px] mt-[5px] mr-[20px] rounded-sm"
                                    src="../assets/lente.svg" alt="immagine-lente-ricerca"></RouterLink>
                        </div>
                        <input class="hidden min-[600px]:flex w-[100%] h-[100%] ml-[15px] mr-[10px] rounded-[20px]"
                            type="text" placeholder="Ricerca">
                    </form>
                    <div class="hidden min-[730px]:flex justify-center items-center">
                        <div>                        
                            <div v-if="isLoggedIn">                           
                                <button class="border-[1px] border-white rounded-md p-[7px] text-xl font-serif font-semibold" @click="handleLogout">Logout</button>            
                                <RouterLink to="/carrello" class="ml-[10px] border-[1px] border-white rounded-md p-[7px] text-xl font-serif font-semibold">Carrello <span class="bg-white w-[30px] h-[30px] text-black text-center rounded-[50%]">{{ quantita }}</span></RouterLink>
                            </div>                         
                            <div v-else>                             
                                <router-link to="/login" class="border-[1px] border-white rounded-md p-[7px] text-xl font-serif font-semibold">Login</router-link>                         
                            </div>                     
                        </div>
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
                                                  
                            <div v-if="isLoggedIn">                           
                            <button class="w-[80px] h-[30px] border-[1px] border-white rounded-md p-[7px] text-black text-xl font-serif font-semibold" @click="handleLogout">Logout</button> 
                            <button class="w-[80px] h-[30px] border-[1px] border-white rounded-md p-[7px] text-black text-xl font-serif font-semibold">
                                <RouterLink to="/carrello">Carrello</RouterLink>
                            </button>           
                            </div>                         
                            <div v-else>                             
                            <router-link to="/login" class="border-[1px] border-white rounded-md p-[7px] text-xl font-serif font-semibold text-black">Login</router-link>                         
                            </div>                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>










