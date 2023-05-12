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

</script>

