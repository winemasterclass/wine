<template>
  <HeroHome />
  <ListCourses />
  <ListVideos />
</template>

<script>
  import { defineComponent } from "vue";
  import HeroHome from "@/components/HeroHome.vue";
  import ListCourses from "@/components/ListCourses.vue";
  import ListVideos from "@/components/ListVideos.vue";

  export default defineComponent({
    components: { HeroHome, ListCourses, ListVideos },
  });
</script>