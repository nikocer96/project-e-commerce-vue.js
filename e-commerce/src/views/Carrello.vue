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
    <main class="bg-[#0a1128] w-full h-full p-[24px] flex justify-around items-center flex-col lg:flex-row">
        <div class="flex flex-col">
            <h1 class="text-white font-semibold text-[30px] mb-[30px]">Carrello</h1>
            <h3 class="text-white font-semibold text-[30px] text-center mt-[100px] mb-[250px]"
                v-if="this.products.length === 0">Il carrello è vuoto</h3>
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
            <div class="">
                <div class="h-[250px] w-[700px] border-[1px] border-white flex justify-center items-center ">
                    <form>
                        <label class="text-white mr-[10px]" for="name">Nome</label>
                        <input class="rounded-lg mr-[10px]" type="text" v-model="nome" placeholder="inserisci il nome..." required>
                        <label class="text-white mr-[10px]" for="cognome">Cognome</label>
                        <input class="rounded-lg" type="text" v-model="cognome" placeholder="inserisci il cognome..." required> <br>
                        <div class="mt-[30px] flex">
                            <label class="text-white mr-[10px]" for="numeroCarta">Num. Carta</label>
                            <input class="mr-[30px]" type="number" v-model="numeroCarta" placeholder="inserisci il numero della carta..."
                                required> <br>
                            
                                
                                    <button class="text-white border-[1px] border-white p-[10px] pl-[20px] pr-[20px] hover:text-purple-400 rounded-md"
                                     @click="pagamento">PAGA</button>
                               
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        <div class="text-white mt-4 text-xl font-medium">Totale: {{ sommaPrezzi }} €</div>


    </main>

</template>