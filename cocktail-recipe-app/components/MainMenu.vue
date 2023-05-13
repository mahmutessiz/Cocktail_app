<template>
  <div>
    <header class="w-full bg-rose-600 flex py-4 px-8 justify-between items-center">
      <div class="font-bold text-lg"><nuxt-link to="/">Cocktail</nuxt-link></div>
      <div class="sm:flex hidden">
        <input type="text" id="search-input" class="rounded-lg rounded-r-none px-2" placeholder="Search cocktail">
        <button type="button" class="bg-fuchsia-950 py-2 px-1 rounded-md rounded-l-none text-white">search</button>
      </div>


      <ul class="gap-4 hidden sm:flex">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>Editor's choise</li>
        <li>Alkoholles</li>
      </ul>
    </header>
    <div>  </div>
  </div>
</template>

<script setup>




/* const base_url = useRuntimeConfig();


let Dete = ref([]);

let computedDete = computed(() => {
  // return a computed value based on Dete.value
  return Dete;
});

let inputValue = "martini";

let funcData = async () => {
  try {
    const { data: response } = await useFetch(base_url.public.apiBase, {
      params: {
        name: inputValue
      },
      headers: {
        "X-Api-Key": base_url.apiSecret
      }
    });
    Dete.value = toRaw(response.value);

  } catch (error) {
    // handle the error here
    console.error(error);
  }
}
console.log(computedDete.value);  */
</script>