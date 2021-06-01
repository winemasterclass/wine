<template>
  <div class="bg-gray-50">
    <div class="mx-auto pb-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <TransitionRoot
              appear
              :show="isShowing"
              enter="transition-all ease-in duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="transition-all ease-in duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Recent Videos</h2>
          </TransitionRoot>
        </div>
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li v-for="video in videos" :key="video.title">
            <TransitionRoot
              appear
              :show="isShowing"
              enter="transition-all ease-in duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="transition-all ease-in duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
            <div class="space-y-4">
              <div class="aspect-w-16 aspect-h-9">
                <img class="object-cover shadow-2xl rounded-xl" :src="video.imageUrl" alt="" />
              </div>

              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                  <h3>{{ video.title }}</h3>
                </div>
              </div>
            </div>
            </TransitionRoot>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

const videos = [
  {
    title: 'Exploring the Universe of Pét-Nat! (Pétillant Naturel)',
    slug: 'exploring-the-universe-of-pet-nat',
    imageUrl:
      '/src/assets/images/videos/Video-1-Pet-Nat.jpeg',
  },
  {
    title: 'Orange Wine and Stoic Philosophy... The Perfect Pairing? (Memento Mori)',
    slug: 'orange-wine-and-stoic-philosophy',
    imageUrl:
      '/src/assets/images/videos/Video-2-Momento-Mori.jpeg',
  },
  {
    title: 'Australian Prosecco... Is it really Prosecco? (Controversial)',
    slug: 'australian-prosecco-is-it-really-prosecco',
    imageUrl:
      '/src/assets/images/videos/Video-3-Aussie-Prosecco.jpeg',
  },
  // More videos...
]

export default {
  components: { TransitionRoot },
  setup() {
    const isShowing = ref(true)
    return {
      videos,
      isShowing
    }
  },
}
</script>