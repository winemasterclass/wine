<template>
  <ListCourses />
</template>

<script>
  import { defineComponent } from "vue";
  import ListCourses from "@/components/ListCourses.vue";

  export default defineComponent({
    components: { ListCourses },
  });
</script>