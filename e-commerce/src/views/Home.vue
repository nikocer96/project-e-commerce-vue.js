<script>
import axios from 'axios'
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      prodotti: [],
      singolo: '',
      casuale: ''
    }
  },
  created() {
    this.casuale = Math.floor(Math.random() * 20) + 1;  
    axios.get(`https://fakestoreapi.com/products/${this.casuale}`)
      .then(response => {
        this.singolo = response.data;
      })
      .catch (error => {
        console.error('Errore durante la chiamata API:',error);
      }) 
  },
  mounted() {
    
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        this.prodotti = response.data;
      })
      .catch(error => {
        console.error('Errore durante la chiamata API:',error);
      });
  },
  methods: {
    aggiungiCarrello(index) {
        let products = {
          title: this.prodotti[index].title,
          image: this.prodotti[index].image,
          price: this.prodotti[index].price
        }

        let data = JSON.stringify(products);
        window.localStorage.setItem('../assets/carrello.json',data);
        console.log(JSON.parse(window.localStorage.getItem('../assets/carrello.json')));
        // sistemare salvataggio al json locale

    },
    apriPagina(index){
      this.$router.push(`./prodotto`); // aggiungere props con indice
    } 
  }
}
</script>

<template>
  <main class="bg-[#0a1128] w-full h-full p-[24px]">
    <!-- sezione in evidenza -->
    <section id="jumbotron">
      <h3 class="text-white font-semibold text-[20px]">Prodotto in evidenza</h3>
      <div class="mx-auto max-w-[1000px] h-[400px] flex items-center justify-center">
        <img :src="this.singolo.image" :alt="this.singolo.title" class="object-down-size h-[300px] rounded-2xl">
        <div class="flex flex-col items-center">
          <span class="ml-[20px] mb-[20px] text-white">{{ this.singolo.title }}</span>
          <span class="text-white font-semibold text-[20px]">{{ this.singolo.price }}€</span>
        </div>
      </div>
    </section>
    <!-- Sezione prodotti -->
    <section>
      <h3 class="text-white font-semibold text-[20px] mb-[20px]">I nostri prodotti:</h3>
      <ul class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="(prodotto, index) in prodotti">
          <div class="bg-[#fefcfb] border-2 rounded-2xl flex flex-col items-center justify-center p-[8px]">
            <img :src="prodotto.image" :alt="prodotto.title" @click="apriPagina(index)" class="object-size-down h-[150px] md:h-[200px] lg:h[350px]">
            <span class="mt-[10px] text-black font-medium">{{ prodotto.title }}</span>
            <div class="mt-[10px] flex">
              <span class="text-black font-bold mr-[50px]">{{ prodotto.price }}€</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 hover:text-red-500" @click="aggiungiCarrello(index)"> 
                <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
