<template>
  <TheNavigation />
  <HomeHero />
</template>

<script>
  import { defineComponent } from "vue";
  import TheNavigation from "@/components/TheNavigation.vue";
  import HomeHero from "@/components/HomeHero.vue";

  export default defineComponent({
    components: { TheNavigation, HomeHero },
  });
</script>