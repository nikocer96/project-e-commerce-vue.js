<script>
import axios from 'axios'
export default {
    data() {
        return {
            products: [],
            totale: '',
            nome: '',
            cognome: '',
            numeroCarta: 0
        }

    },
    mounted() {
        this.prendiProdotti();
    },
    methods: {
        async rimuoviProdotto(index) {
            await axios.delete(`http://localhost:3000/prodotti/${index}`);
            await this.prendiProdotti();
            this.$emit('prodottoRimosso');
        },

        async prendiProdotti() {
            try {
                const response = await axios.get('http://localhost:3000/prodotti');
                this.products = response.data;
            } catch (error) {
                console.error("Errore durante la chiamata al json locale:", error)
            }
        },
        async pagamento() {
            let risultato = await axios.post(
                `http://localhost:3000/carteUtenti`, {
                nome: this.nome,
                cognome: this.cognome,
                numeroCarta: this.numeroCarta,
            }
            )
            alert("Pagamento effettuato con successo!")

        }
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
    <main class="bg-[#0a1128] w-screen h-full p-[24px] flex justify-around  flex-col lg:flex-row">
        <div class="flex flex-col">
            <h1 class="text-white font-semibold text-[30px] mb-[30px]">Carrello</h1>
            <h3 class="text-white font-semibold text-[30px] text-center mt-[100px] mb-[250px]"
                v-if="this.products.length === 0">Il carrello è vuoto</h3>
            <ul v-else>
                <li v-for="product in products" class="border-2 border-white  mb-[20px] p-[24px] flex items-center">
                    <img :src="product.image" :alt="product.title" class="object-small-size h-[200px] mr-[20px]">
                    <div class="flex flex-col items-center">
                        <span class="text-white">{{ product.title }}</span>
                        <span class="text-white">{{ product.price }} €</span>
                        <button @click="rimuoviProdotto(product.id)"
                            class="mt-[20px] text-white w-[100px] h-[60px] border-2 rounded-lg">Rimuovi</button>
                    </div>
                </li>
            </ul>

            <div class="p-[20px] border-[1px] border-white flex justify-center items-center">
                <form class="flex ">
                    <div class="">
                        <div class="">
                            <label class="text-white mr-[45px]" for="name">Nome</label>
                            <input class="rounded-lg mr-[10px]" type="text" v-model="nome"
                                placeholder="inserisci il nome..." required>
                        </div>
                        <div class="mt-[10px]">
                            <label class="text-white mr-[20px]" for="cognome">Cognome</label>
                            <input class="rounded-lg" type="text" v-model="cognome"
                                placeholder="inserisci il cognome..." required>
                        </div>
                        <div class="flex justify-center items-center mt-[10px]">
                            <label class="text-white mr-[10px]" for="numeroCarta">Num. Carta</label>
                            <input class="mr-[30px] rounded-lg" type="number" v-model="numeroCarta"
                                placeholder="inserisci il numero della carta..." required>
                            <button
                                class="text-white border-[1px] border-white p-[10px] pl-[20px] pr-[20px] hover:text-purple-400 rounded-md"
                                @click="pagamento">PAGA</button>

                        </div>

                    </div>
                </form>

            </div>

        </div>
        <div class="text-white mt-4 text-xl font-medium">Totale: {{ sommaPrezzi }} €</div>


    </main>

</template>