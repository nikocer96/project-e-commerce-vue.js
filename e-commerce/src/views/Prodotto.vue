<script>
import axios from "axios";
export default {
  

  data() {
    return {
      prodotto: '',
    }
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products/1")
    .then(response => {
        this.prodotti = response.data;
      })
      .catch(error => {
        console.error('Errore durante la chiamata API:',error);
      })
    }
  };



</script>

<template>

<div class="border-2 border-red-500 w-screen bg-[#0a1128] flex flex-col justify-center items-center">
    <!-- NAV -->
    <div class="bg-[#0a1128] border-2 border-red-500 w-screen h-[200px] max-[600px]:hidden"></div>
    <div class="bg-[#0a1128] border-2 border-red-500 w-screen h-[50px] min-[600px]:hidden"></div>
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
            <!-- FOOTER -->
            <div class="bg-[#0a1128] border-2 border-red-500 w-screen h-[200px] max-[600px]:hidden"></div>
            <div class="bg-[#0a1128] border-2 border-red-500 w-screen h-[50px] min-[600px]:hidden"></div>
            
            </div>
           

</template>