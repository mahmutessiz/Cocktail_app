<template>
    <div class="w-full flex justify-center mt-4 min-h-screen">
        <div class="w-4/5">
            <img :src="cocktailData.image" class="w-full sm:w-2/3 m-auto" alt="">
            <div class="sm:w-2/3 m-auto">
                <h1 class="font-bold text-3xl pt-4 pb-2">{{ cocktailData.name }}</h1>
                <p class="text-lg">{{ cocktailData.description }}</p> <br />
                <h2 class="font-bold text-3xl pt-4 pb-2">Instructions</h2>
                <p class="text-lg" v-html="formattedInstructions"></p>
            </div>

        </div>
    </div>
</template>

<script setup>
import CocktailData from "../../data/HeroCocktailsData.json";

const route = useRoute();
const routeParam = route.params.id;
const cocktailData = CocktailData.cocktails[routeParam];

const formattedInstructions = computed(() => {
  return cocktailData.instructions.replace(/,/g, ',<br>');
});
</script>