<script>
import carrelloData from '../assets/carrello.json'
export default {
    data() {
        return{
            products: carrelloData,
            totale: ''
        }
        
    }
}
</script>

<template>
    <main class="bg-[#0a1128] w-full h-screen p-[24px]">
        <h1 class="text-white font-semibold text-[30px] mb-[30px]">Carrello</h1>
        <ul>
            <li v-for="product in products" class="border-2 border-white w-[700px] h-[250px] mb-[20px] p-[24px] flex items-center">
                <img :src="product.image" :alt="product.title" class="object-small-size h-[200px] mr-[20px]">
                <div class="flex flex-col items-center">
                    <span class="text-white">{{ product.title }}</span>
                    <span class="text-white">{{ product.price }} €</span>
                </div>
            </li>
        </ul>
    </main>
</template>