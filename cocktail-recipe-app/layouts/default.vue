<template>
    <div>
        <MainMenu class="sticky top-0" />
        
        <slot />

        {{ data }}

        <FooterSection />
    </div>
</template>

<script setup>

import CocktailHeroData from "../data/HeroCocktailsData.json";
const data = CocktailHeroData;



/* const base_url = useRuntimeConfig();


let Dete = ref([]);

const funcData = async () => {
    const { data: response } = await useFetch(base_url.public.apiBase + "blood", {

        headers: {
            "X-Api-Key": base_url.apiSecret
        }

    });
    Dete.value = toRaw(response.value);
}
funcData();
console.log(Dete); */

</script>

