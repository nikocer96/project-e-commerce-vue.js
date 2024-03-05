<script>
import carrelloData from '../assets/carrello.json'
export default {
    data() {
        return{
            products: carrelloData
        }
        
    }
}
</script>

<template>
    <main class="bg-[#0a1128] w-full h-screen p-[24px]">
        <p v-for="product in products" class="text-white">{{ product.name }}</p>
    </main>
</template>