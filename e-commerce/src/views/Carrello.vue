<script>
import axios from 'axios'
import Prodotto from '../views/Prodotto.vue'
export default {
    components: {
        Prodotto
    },
    data() {
        return {
            products: [],
            totale: 0
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
            try {
                const response = await axios.get('http://localhost:3000/prodotti');
                this.products = response.data;
            } catch (error) {
                console.error("Errore durante la chiamata al json locale:", error)
            }
        },
        sommaPrezzi() {
            this.totale = this.products.reduce((acc, product) => acc + product.price, 0);
            this.totale = this.totale.toFixed(2);
        }
    }

}
</script>

<template>
    <main class="bg-[#0a1128] w-full h-full p-[24px]">
        <h1 class="text-white font-semibold text-[30px] mb-[30px]">Carrello</h1>
        <h3 class="text-white font-semibold text-[30px] mb-[30px]" v-if="this.products.length === 0">Il carrello è vuoto
        </h3>
        <ul v-else>
            <li v-for="product in products"
                class="border-2 border-white w-[700px] h-[250px] mb-[20px] p-[24px] flex items-center">
                <img :src="product.image" :alt="product.title" class="object-small-size h-[200px] mr-[20px]">
                <div class="flex flex-col items-center">
                    <span class="text-white">{{ product.title }}</span>
                    <span class="text-white">{{ product.price }} €</span>

                    <button @click="rimuoviProdotto(product.id)"
                        class="mt-[20px] text-white w-[100px] h-[60px] border-2 rounded-lg">Rimuovi</button>
                </div>
            </li>
        </ul>
        <button class="border-[1px] border-white text-white p-[10px] rounded-md" @click="sommaPrezzi">Clicca</button>
        <div class="text-white mt-4">Totale: {{ this.totale }} €</div>
    </main>
</template>