<template>
    <div class="border border-black h-[400px]">
        <h1 class="flex justify-center items-center mb-[100px]">Pagina Registrati</h1>
        <div class="flex flex-col justify-center items-center">
            <input class="w-[300px] border-2 border-black mb-[20px] text-center" type ="text" v-model="email" placeholder="Registra la Email" />
            <input class="w-[300px] border-2 border-black mb-[20px] text-center" type ="text" v-model="password" placeholder="Registra la Password" />
        </div>
        <div class="flex justify-between items-center mx-[350px] mt-[70px]">
            <button class="border-2 w-[70px] border-black rounded-full" v-on:click="SignUp">Registrati</button>
            <p>
                <router-link class="border w-[110px] border-black" to="/Login">Sei già registrato? Esegui qui il LogIn!</router-link>
            </p>
        </div>
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    export default {
    name:"Login",
    data()
    {
        return {
            email:"",
            password:"",
            emailREGISTRATE:["Alessandro@test.it", "Jesus@test.it", "Giuseppe@test.it", "Nico@test.it"],
            passwordREGISTRATE:["Test123", "Test123", "Test123", "Test123"]
        }
    },
    methods:{
         SignUp(){
            console.log(this.email);
            console.log(this.password);

                alert("SIGNED UP!");
                this.emailREGISTRATE.push(this.email);
                this.passwordREGISTRATE.push(this.password);
                console.log(this.emailREGISTRATE)
                console.log(this.passwordREGISTRATE)
        }
    }
}
</script>
    







