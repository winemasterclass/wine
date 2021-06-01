<template>
  <HeroHome />
  <ListCourses />
  <ListVideos />
</template>

<script>
  import HeroHome from "@/components/HeroHome.vue";
  import ListCourses from "@/components/ListCourses.vue";
  import ListVideos from "@/components/ListVideos.vue";

  export default {
    components: { HeroHome, ListCourses, ListVideos },
  };
</script>
