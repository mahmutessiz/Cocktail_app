<template>
  <div>
    <header class="w-full bg-[rgb(253,242,88)] flex py-4 px-4 sm:px-16 justify-between items-center">
      <div class="font-bold text-lg"><nuxt-link to="/">Cocktail</nuxt-link></div>
      <div class="flex">
        <div></div>
        <input type="text" id="search-input" class="w-32 sm:w-auto rounded-lg bg-slate-500/50 text-black placeholder:text-black/70 rounded-r-none px-2"
          placeholder="Search cocktail" v-model="inputValue">
        <nuxt-link :to="'/results/' + computedİnputValue"
          class="bg-fuchsia-950/80 p-1 rounded-md rounded-l-none text-white"><svg xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z" />
          </svg></nuxt-link>
      </div>
    </header>
    <div> </div>
  </div>
</template>

<script setup>


const inputValue = ref("");
const computedİnputValue = computed(() => { return inputValue.value })

/**
 * !api ninja 
 *  const base_url = useRuntimeConfig();


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