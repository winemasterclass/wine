<template>
  <ListVideos />
</template>

<script>
  import { defineComponent } from "vue";
  import ListVideos from "@/components/ListVideos.vue";

  export default defineComponent({
    components: { ListVideos },
  });
</script>