<template>
    <div class="w-full flex flex-col items-center mt-4 min-h-screen">
        <div class="w-4/5" v-for="item in cocktailDataApi.drinks" :key="item">
            <img :src="item.strDrinkThumb" class="w-full sm:w-2/3 m-auto" alt="">
            <div class="sm:w-2/3 m-auto">
                <h1 class="font-bold text-3xl pt-4 pb-2">{{ item.strDrink }}</h1>
                <h2 class="font-bold text-xl pt-4 pb-2">Ingredients</h2>
                <ul class="list-disc px-4">
                    <li v-if="item.strIngredient1">{{ item.strIngredient1 }} - {{ item.strMeasure1 }}</li>
                    <li v-if="item.strIngredient2">{{ item.strIngredient2 }} - {{ item.strMeasure2 }}</li>
                    <li v-if="item.strIngredient3">{{ item.strIngredient3 }} - {{ item.strMeasure3 }}</li>
                    <li v-if="item.strIngredient4">{{ item.strIngredient4 }} - {{ item.strMeasure4 }}</li>
                    <li v-if="item.strIngredient5">{{ item.strIngredient5 }} - {{ item.strMeasure5 }}</li>
                    <li v-if="item.strIngredient6">{{ item.strIngredient6 }} - {{ item.strMeasure6 }}</li>
                    <li v-if="item.strIngredient7">{{ item.strIngredient7 }} - {{ item.strMeasure7 }}</li>
                    <li v-if="item.strIngredient8">{{ item.strIngredient8 }} - {{ item.strMeasure8 }}</li>
                    <li v-if="item.strIngredient9">{{ item.strIngredient9 }} - {{ item.strMeasure9 }}</li>
                    <li v-if="item.strIngredient10">{{ item.strIngredient10 }} - {{ item.strMeasure10 }}</li>
                    <li v-if="item.strIngredient11">{{ item.strIngredient11 }} - {{ item.strMeasure11 }}</li>
                    <li v-if="item.strIngredient12">{{ item.strIngredient12 }} - {{ item.strMeasure12 }}</li>
                    <li v-if="item.strIngredient13">{{ item.strIngredient13 }} - {{ item.strMeasure13 }}</li>
                    <li v-if="item.strIngredient14">{{ item.strIngredient14 }} - {{ item.strMeasure14 }}</li>
                    <li v-if="item.strIngredient15">{{ item.strIngredient15 }} - {{ item.strMeasure15 }}</li>
                </ul>
                <h2 class="font-bold text-xl pt-4 pb-2">Instructions</h2>
                <p class="text-lg">{{ item.strInstructions }}</p> <br />
            </div>
        </div>
    </div>
</template>

<script setup>

import axios from "axios";

const route = useRoute()

let cocktailId = route.params.idApi;
let cocktailDataApi = ref([]);


onMounted(async () => {


    await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + cocktailId).then((response) => {
        cocktailDataApi.value = response.data;
    });

}

)
/* www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007 */




</script>