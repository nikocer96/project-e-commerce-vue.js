<script>
export default {
    data() {
        return {
            sviluppatori: [
                {   id : 1,
                    nome : "Jesus Merma",
                    immagine : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0by_6XFgd4UaD1LskiqDA8oYr54o8te4k2g&usqp=CAU",
                    lavoro : "Front-End Developer"
                },
                {
                    id : 2,
                    nome : "Alessandro Agnello",
                    immagine : "../src/assets/si.png",
                    lavoro : "Front-End Developer"
                },
                {   id : 3,
                    nome : "Nico Cerone",
                    immagine : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0by_6XFgd4UaD1LskiqDA8oYr54o8te4k2g&usqp=CAU",
                    lavoro : "Front-End Developer"
                },
                {   id : 4,
                    nome : "Giuseppe Raineri",
                    immagine : "../src/assets/si2.jpg",
                    lavoro : "Front-End Developer"
                },
                {   id : 5,
                    nome : "Mattia Colace",
                    immagine : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0by_6XFgd4UaD1LskiqDA8oYr54o8te4k2g&usqp=CAU",
                    lavoro : "Front-End Developer"
                },
                {   id : 4,
                    nome : "Giulia Picano",
                    immagine : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0by_6XFgd4UaD1LskiqDA8oYr54o8te4k2g&usqp=CAU",
                    lavoro : "Front-End Developer"
                },          
            ]
        }
    }
}
</script>

<template>
        <div class="bg-[#0a1128]">
            <h1 class="text-center font-bold shadow-[#B02E0C] text-red-500 text-5xl pb-9">CHI SIAMO?</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-10 ">
                <div v-for="item in sviluppatori" class="flex justify-around items-center md:flex-col">
                    <!-- <span class="w-[40px] md:hidden">{{ item.nome }}</span> -->
                    <img class="md:h-auto md:max-w-full rounded-lg h-[200px] w-[250px]" :src="item.immagine" :alt="item.nome">
                    <div class="flex justify-center items-center flex-col pl-2">
                        <span class="max-md:w-[40px] text-white pb-3">{{ item.nome }}</span>
                        <span class="max-md:w-[40px] text-white">{{ item.lavoro }}</span>
                </div>    
            </div>
        </div>    
    </div>   
</template>