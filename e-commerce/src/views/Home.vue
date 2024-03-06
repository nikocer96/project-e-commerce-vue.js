<script>
import axios from 'axios'
import { RouterLink } from 'vue-router';

export default {
  data() {
    return {
      prodotti: [],
      singolo: '',
      casuale: '',
      aggiunto: false
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
    async aggiungiCarrello(index) {
      await axios.post('http://localhost:3000/prodotti',{
        id: this.prodotti[index].id + "",
        title: this.prodotti[index].title,
        image: this.prodotti[index].image,
        price: this.prodotti[index].price
      })
      this.aggiunto = true;
      setTimeout(() => this.aggiunto = false, 3000);
    },
    apriPagina(index){
      this.$router.push(`./prodotto/${index+1}`); 
    },
    cambiaEvidenza() {
      this.casuale = Math.floor(Math.random() * 20) + 1;  
      axios.get(`https://fakestoreapi.com/products/${this.casuale}`)
        .then(response => {
          this.singolo = response.data;
        })
        .catch (error => {
          console.error('Errore durante la chiamata API:',error);
        }) 
    }
  }
}
</script>

<template>
  <main class="bg-[#0a1128] w-full h-full p-[24px]">
    <!-- sezione in evidenza -->
    <h3 class=" text-red-500 font-semibold text-[20px]">Prodotti in evidenza</h3>
    <section id="jumbotron" class="w-full flex justify-center items-center">
      <div class="w-[800px] bg-white rounded-2xl">
        <div class="h-[400px] flex flex-col md:flex-row items-center justify-center">
          <img :src="this.singolo.image" :alt="this.singolo.title" class="object-down-size rounded-2xl h-[150px] md:h-[300px] ">
          <div class="flex flex-col items-center mr-[50px]">
            <span class="ml-[20px] mb-[20px] text-black">{{ this.singolo.title }}</span>
            <span class="text-black font-semibold text-[20px]">{{ this.singolo.price }}€</span>
          </div>
          
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" @click="cambiaEvidenza" class="shadow-[#B02E0C] text-red-500 size-[100px] hover:size-[200px]">
        <path fill-rule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
      </svg>
    </section>
    <!-- Sezione prodotti -->
    <section>
      <h3 class="text-red-500 font-semibold text-[20px] mb-[20px]">I nostri prodotti:</h3>
      <ul class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        <li v-for="(prodotto, index) in prodotti">
          <div class="bg-[#fefcfb] border-2 rounded-2xl flex flex-col items-center justify-center p-[8px]">
            <img :src="prodotto.image" :alt="prodotto.title" @click="apriPagina(index)" class="object-size-down h-[150px] md:h-[200px] lg:h[350px]">
            <span class="mt-[10px] text-black font-medium">{{ prodotto.title }}</span>
            <div class="mt-[10px] flex">
              <span class="text-black font-bold mr-[50px]">{{ prodotto.price }}€</span>
              <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 hover:text-red-500" @click="aggiungiCarrello(index)"> 
                <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
              </svg>
              <Teleport to="body">
                <div v-if="aggiunto" class="w-[250px] h-[100px] fixed top-[40%] left-[50%] ml-[-150px] border-2 border-black rounded-xl flex justify-center items-center">
                  <span class="font-medium text-[20px] text-red-700">Aggiunto al carrello</span>
                </div>
              </Teleport>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </main>
</template>
