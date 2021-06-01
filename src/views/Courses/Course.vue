<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h3>Course Slug: {{ slug }}</h3>
  </div>
</template>

<script>
  export default {
    props: ["slug"],
  };
</script>
