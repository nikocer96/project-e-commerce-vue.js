<template>
    <div class="border border-black h-[400px] bg-[#0a1128]">
        <h1 class="flex justify-center items-center mb-[100px] text-white">Pagina Login/Registrati</h1>
        <div class="flex flex-col justify-center items-center">
            <input class="w-[300px] border-2 border-black mb-[20px] text-center text-black" type ="text" required v-model="email" placeholder="Registra la Email" />
            <input class="w-[300px] border-2 border-black mb-[20px] text-center text-black" type ="password" required v-model="password" placeholder="Registra la Password" />
        </div>
        <div class="flex justify-between items-center mx-[350px] mt-[70px]">
            <button class="border-2 w-[70px] border-white rounded-full text-white" v-on:click="Login">Login</button>
            <button class="border-2 w-[90px] border-white rounded-full text-white" v-on:click="SignUp">Registrati</button>
        </div>
    </div>
</template>
    
    <script>
    import { RouterLink } from 'vue-router';
    import axios from 'axios';
    
    const validateEmail = (email) => {
      return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    export default {
    data()
    {
        return {
            email:"",
            password:"",
            emailcheck:"",
            passwordcheck:""
        }
    },
    methods:
    {
         async SignUp()
         {
            if(this.email != "" && this.password != "")
            {
                if(validateEmail(this.email))
                {
                    let risultato = await axios.post("http://localhost:3000/users",{
                    email:this.email,
                    password:this.password
                    })
                    console.warn(risultato);
                    alert("sign up completato!");
                    localStorage.setItem("user.info", JSON.stringify(risultato.data));
                }
                else
                {
                    alert("email non inserita correttamente");
                }
            }
            else
            {
                alert("email o password non inserite correttamente");
            }
        },
        async Login()
        {
            let risultato = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            if(risultato.status == 200 && risultato.data.length>0)
            {
                alert("Login effettuato con successo!")
                console.log(risultato.data);
                localStorage.setItem("user.info", JSON.stringify(risultato.data[0]));
                this.$router.push("/");
            }
            else
            {
                alert("email o password non inserite correttamente")
            }
        }
    }
}
</script>
    





