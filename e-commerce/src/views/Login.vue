<template>
    <div class="border border-black h-[400px] bg-[#0a1128]">
        <h1 class="flex justify-center items-center mb-[100px] text-white">Pagina Login/Registrati</h1>
        <div class="flex flex-col justify-center items-center">
            <input class="w-[300px] border-2 border-black mb-[20px] text-center text-white" type ="text" v-model="email" placeholder="Registra la Email" />
            <input class="w-[300px] border-2 border-black mb-[20px] text-center text-white" type ="password" v-model="password" placeholder="Registra la Password" />
        </div>
        <div class="flex justify-between items-center mx-[350px] mt-[70px]">
            <button class="border-2 w-[70px] border-white rounded-full text-white" v-on:click="Login">Login</button>
            <button class="border-2 w-[90px] border-white rounded-full text-white" v-on:click="SignUp">Registrati</button>
        </div>
    </div>
    </template>
    
    <script>
import { RouterLink } from 'vue-router';

    export default {
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
        },
        Login(){
            let valuetrovata = false;
            for(let i = 0; i < this.emailREGISTRATE.length; i++)
            {
                if(this.email == this.emailREGISTRATE[i] && this.password == this.passwordREGISTRATE[i])
                {
                    valuetrovata = true;
                    break;
                }
                else
                {
                    valuetrovata = false;
                }
            }
            if(valuetrovata)
            {
                alert("login effettuato con successo!");
                this.$router.push("./");
            }
            else
            {
                alert("email o password non corrette! se non sei ancora registrato, clicca su registrati!");
            }
        }
    }
}
</script>
    





