<template>
  <HomeHero />
  <HomeCourses />
</template>

<script>
  import { defineComponent } from "vue";
  import HomeHero from "@/components/HomeHero.vue";
  import HomeCourses from "@/components/HomeCourses.vue";

  export default defineComponent({
    components: { HomeHero, HomeCourses },
  });
</script>