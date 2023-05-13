<template>
    <div>
        <button @click="deneme">tikla</button>
        <br>
        <br>
{{ cocktailData }}
    </div>
</template>

<script setup>
let cocktailName = ref('old fashioned');
let cocktailData = ref([]);

const deneme = async () => {
    const { data: product } = await useFetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + cocktailName.value);

cocktailData.value = product
    console.log(product);
}
</script>
