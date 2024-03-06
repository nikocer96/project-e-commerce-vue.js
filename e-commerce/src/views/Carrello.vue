<script>
import axios from 'axios'
export default {
    data() {
        return{
            products: [],
            totale: ''
        }
        
    },
    mounted() {
        axios.get('http://localhost:3000/prodotti')
            .then(response => {
                this.products = response.data;
            })
            .catch(error => {
                console.error("Errore durante la chiamata al json locale:", error)
            })
    },
    methods: {
        async rimuoviProdotto(index) {
            // TODO: rimuovi prodotto
            // const result = axios.delete('http://localhost:3000/prodotti')
        }
    }
}
</script>

<template>
    <main class="bg-[#0a1128] w-full h-full p-[24px]">
        <h1 class="text-white font-semibold text-[30px] mb-[30px]">Carrello</h1>
        <ul>
            <li v-for="(product, index) in products" class="border-2 border-white w-[700px] h-[250px] mb-[20px] p-[24px] flex items-center">
                <img :src="product.image" :alt="product.title" class="object-small-size h-[200px] mr-[20px]">
                <div class="flex flex-col items-center">
                    <span class="text-white">{{ product.title }}</span>
                    <span class="text-white">{{ product.price }} €</span>
                    <button @click="rimuoviProdotto(index)" class="mt-[20px] text-white w-[100px] h-[60px] border-2 rounded-lg">Rimuovi</button>
                </div>
            </li>
        </ul>
    </main>
</template>