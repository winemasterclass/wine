<template>
  <TransitionRoot
      appear
      :show="isShowing"
      as="template"
      enter="transform transition ease-in-out duration-300"
      enter-from="opacity-0  scale-90"
      enter-to="opacity-100 scale-100"
      leave="transform duration-200 transition"
      leave-from="opacity-100 scale-100"
      leave-to="opacity-0 scale-90"
    >
    <div
      style="padding: 56.25% 0 0 0"
      class="relative bg-black overflow-hidden shadow-xl rounded-lg"
    >
      <iframe
        src="https://player.vimeo.com/video/556814724?&amp;autoplay=1"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
        title="Wine Tasting Crash Course"
      ></iframe>
    </div>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import { TransitionRoot } from "@headlessui/vue";

export default {
  components: { TransitionRoot },

  setup() {
    const isShowing = ref(true);

    return {
      isShowing,
    };
  },
};
</script>
