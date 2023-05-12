<template>

    <div>
<MainMenu/>

<slot/>

{{ data }}

    </div>

</template>

<script setup>

import CocktailHeroData from "../data/HeroCocktailsData.json";
const data = CocktailHeroData;

/* let Dete = ref([]);

const funcData= async ()=>{
    const { data: response } = await useFetch("https://api.api-ninjas.com/v1/cocktail?name=blood", {
    
    headers:{
        "X-Api-Key": "ZaU0i24xLhaL8BuCUYF5Ww==GRKu390gRSYDSWyt"
    }

});
Dete.value = toRaw(response.value);
} 
funcData();
console.log(Dete); */


const base_url = useRuntimeConfig();


let Dete = ref([]);

const funcData= async ()=>{
    const { data: response } = await useFetch(base_url.public.apiBase + "blood", {
    
    headers:{
        "X-Api-Key": base_url.apiSecret
    }

});
Dete.value = toRaw(response.value);
} 
funcData();
console.log(Dete);

</script>

