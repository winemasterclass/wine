<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <ul class="space-y-3">
      <li v-for="Video in Videos" :key="Video.id">
        <router-link :to="{ name: 'Video', params: { slug: Video.slug } }">
          <div class="bg-white shadow overflow-hidden rounded-md px-6 py-4">
            {{ Video.title }}
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    setup() {
      return {
        Videos,
      };
    },
  });

  const Videos = [
    {
      id: 1,
      title: "Video One",
      slug: "video-one",
      summary: "This is video one.",
    },
    {
      id: 2,
      title: "Video Two",
      slug: "video-two",
      summary: "This is video two.",
    },
    {
      id: 3,
      title: "Video Three",
      slug: "video-three",
      summary: "This is video three.",
    },
  ];
</script>
