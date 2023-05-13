<template>
    <div class="card-container">
        <div class="card" v-for="(cocktail) in cocktailData.cocktails" :key="cocktail.id">
            <img :src="cocktail.image" class="object-cover object-center w-full aspect-video" alt="martini image">
            <div>
                <ul class="flex flex-col justify-between py-4 px-2">
                    <li class="text-black font-bold text-xl"> {{ cocktail.name }}</li>
                    <li class="text-black/80 line-clamp-4"> {{ cocktail.description }} </li>
                    <li class="w-full flex justify-end px-4 pt-4">
                        <nuxt-link
                         :to="'/recipe/' + cocktail.id"
                         class="border border-black/20 bg-rose-900 text-white text-sm shadow-md shadow-black/30 hover:scale-105 p-1 rounded-md">
                            <span>View more</span>
                        </nuxt-link>
                     </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import CocktailData from "../data/HeroCocktailsData.json";

const cocktailData = CocktailData;
</script>

