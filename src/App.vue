<template>
  <div class="min-h-screen bg-gray-50">
    <TheNavigation v-if="!$route.meta.hideNavbar" />
    <main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>
  </div>
</template>

<style scoped></style>

<script>
  import TheNavigation from "@/components/TheNavigation.vue";

  export default {
    components: { TheNavigation },
  };
</script>
