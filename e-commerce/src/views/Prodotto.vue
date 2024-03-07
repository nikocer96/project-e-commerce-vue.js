<script>
import axios from "axios";
export default {
  data() {
    return {
      prodotto: []
    }
  },
  mounted() {
    const productId = this.$route.params.id;
    axios.get(`https://fakestoreapi.com/products/${productId}`) 
      .then(response => {
        this.prodotto = response.data;
    })
    .catch(error => {
      console.error('Errore durante la chiamata API:',error);
    })
  },
  methods: {
    async aggiungiCarrello() {
      await axios.post('http://localhost:3000/prodotti',{
        id: this.prodotto.id + "",
        title: this.prodotto.title,
        image: this.prodotto.image,
        price: this.prodotto.price
      })

    }
  } 
}
</script>

<template>

<div class=" w-full bg-[#0a1128] flex flex-col justify-center items-center p-[24px]">
  <!-- HOME PRODOTTO -->
  <h1 class="text-white font-bold text-[40px] mb-[50px]">{{ prodotto.title }}</h1>
  <img :src="prodotto.image" :alt="prodotto.title" class="object-small-size h-[450px]">
    <div class="mt-[40px]">
      <p class="bg-[#0a1128] font-bold text-white mb-[10px]">Prezzo €: {{ prodotto.price }}</p>
      <p class="bg-[#0a1128] font-bold text-white mb-[10px]">Categoria: {{ prodotto.category }}</p>
      <p class="bg-[#0a1128] font-bold text-white mb-[30px]">Descrizione: {{ prodotto.description }}</p>                
      <div class="h-[50px] margin-8 flex justify-center items-center">
        <!-- BOTTONE -->
        <button 
          @click="aggiungiCarrello" class="bg-blue-600 px-20 text-white rounded-lg font-bold hover:bg-blue-500">
          AGGIUNGI AL CARRELLO
        </button>
      </div>
    </div>  
</div>
           

</template>