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
                         class="border border-black/20 bg-[rgb(7,81,96)] text-white text-sm shadow-md shadow-black/30 hover:scale-105 py-1 px-2 rounded-md">
                            <span class="flex">View more &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M19 10.41V15h2V7h-8v2h4.59L12 14.59L4.41 7L3 8.41l9 9z"/></svg>
                            </span>
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

