<template>
    <div>
        <MainMenu class="sticky top-0" />

        <slot />


        <FooterSection />
    </div>
</template>

<script setup>





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

