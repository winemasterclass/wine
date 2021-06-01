<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    Course Slug: {{ slug }}
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    props: ["slug"],
  });
</script>
