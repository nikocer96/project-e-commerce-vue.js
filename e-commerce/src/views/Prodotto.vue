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
      await this.prendiProdotti()
      this.$emit('prodottoAggiunto');

    }
  } 
}
</script>

<template>

<<<<<<< HEAD
<div class="border-2 border-red-500 w-screen bg-[#0a1128] flex flex-col justify-center items-center">
    <!-- HOME PRODOTTO -->
        <h1>{{ prodotto.title }}</h1>
        <div class="border-2 border-red-500">
            <img :src="prodotto.image" class="w-[100%]" :alt="prodotto.title">
            <img class="" src="https://i2.res.24o.it/images2010/Editrice/ILSOLE24ORE/ILSOLE24ORE/2020/04/09/Motori24/ImmaginiWeb/Ritagli/20C0001_181-1-ko9--1020x533@IlSole24Ore-Web.jpg" alt="auto">
                <div class="border-2 border-red-500">
                        <p class="bg-[#0a1128] font-bold text-white">Prezzo €:</p>
                        <p class="bg-[#0a1128] font-bold text-white">Categoria:</p>
                        <p class="bg-[#0a1128] font-bold text-white">Descrizione:</p>                
                    <div class="h-[50px] border-2 border-red-500 margin-8 flex justify-center items-center">
                       <!-- BOTTONE -->
                        <button 
                            @click="getCarrello"
                            class="bg-blue-600 px-20 text-white rounded-lg font-bold hover:bg-blue-500 "
                        >
                            AGGIUNGI AL CARRELLO
                        </button>
                    </div>
                    <Card v-if="prodotto" :prodotto="prodotto" />
                </div>
            </div>
            
            
            </div>
=======
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
>>>>>>> 1f2c45202742862f2bb54a8428dd988a064f33da
           

</template>