<template>
<TransitionRoot appear :show="isShowing" enter="transition-all ease-in duration-100" enter-from="opacity-0" enter-to="opacity-100" leave="transition-all ease-in duration-100" leave-from="opacity-100" leave-to="opacity-0">      
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="relative bg-black overflow-hidden shadow-2xl rounded-2xl aspect-w-16 aspect-h-9">
      <iframe :src="video.vimeoSrc" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" title="Wine Tasting Crash Course"></iframe>
    </div>
    <h3>Video Slug: {{video.slug}}</h3>
  </div>
</TransitionRoot>
</template>

<script>
  import { ref } from "vue";
  import { TransitionRoot } from "@headlessui/vue";
  import videos from "@/assets/data/videos.js";

  export default {
    components: {TransitionRoot},
    setup() {
      const isShowing = ref(true);
      return {
        isShowing,
      };
    },
    data() {
      return {
        videoSlug: this.$route.params.slug
      }
    },
    computed: {
      video(){
        return videos.videos.find(
          video => video.slug == this.videoSlug
        )
      }
    }
  };
</script>