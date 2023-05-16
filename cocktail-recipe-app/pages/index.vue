<template>
  <div>
    <HeroSection />
    <CocktailRecipeCard />
  </div>
</template>

<script setup>

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  title: "Cocktail App",
  meta: [
    {
      name: 'description',
      content: 'This is a cocktail website. You can find and learn how to make cocktails.'
    },
    {
      name: "keywords",
      content: "cocktail"
    }
  ]
})
</script>

