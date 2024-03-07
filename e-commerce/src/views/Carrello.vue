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
        this.prendiProdotti();
    },
    methods: {
        async rimuoviProdotto(index) {
            const response = await axios.delete(`http://localhost:3000/prodotti/${index}`)
                .then(response => this.prendiProdotti());
        },
        async prendiProdotti() {
            try{
                const response = await axios.get('http://localhost:3000/prodotti');
                    this.products = response.data;
            }catch(error) {
                console.error("Errore durante la chiamata al json locale:", error)
            }
        },
        
    },
    computed: 
    {
        sommaPrezzi() {
            this.totale = this.products.reduce((acc, product) => acc + product.price, 0);
            this.totale = this.totale.toFixed(2);
            return this.totale;
        }
    }
}
</script>

<template>
    <main class="bg-[#0a1128] w-full h-full p-[24px] flex justify-around items-center flex-col lg:flex-row">
        <div class="flex flex-col">
            <h1 class="text-white font-semibold text-[30px] mb-[30px]">Carrello</h1>
        <h3 class="text-white font-semibold text-[30px] text-center mt-[100px] mb-[250px]" v-if="this.products.length===0">Il carrello è vuoto</h3>
        <ul v-else>
            <li v-for="product in products" class="border-2 border-white w-[700px] h-[250px] mb-[20px] p-[24px] flex items-center">
                <img :src="product.image" :alt="product.title" class="object-small-size h-[200px] mr-[20px]">
                <div class="flex flex-col items-center">
                    <span class="text-white">{{ product.title }}</span>
                    <span class="text-white">{{ product.price }} €</span>
                    <button @click="rimuoviProdotto(product.id)" class="mt-[20px] text-white w-[100px] h-[60px] border-2 rounded-lg">Rimuovi</button>
                </div>
            </li>
        </ul>
        </div>
        <div class="text-white mt-4 text-xl font-medium">Totale: {{ sommaPrezzi }} €</div>
    </main>
</template>