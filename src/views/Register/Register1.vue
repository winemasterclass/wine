<template>
  <div class="min-h-screen bg-white flex">
    <div class="flex-1 flex flex-col justify-center pt-8 pb-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
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
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <img class="h-12 w-auto" src="@/assets/images/brand/Wine-Masterclass-Icon-256.png" alt="Wine Masterclass Logo" />
          <div class="lg:hidden mt-6 aspect-w-16 aspect-h-9">
            <img class="object-cover shadow-lg rounded-lg" src="@/assets/images/register/Wine-Tasting-Crash-Course.jpg" alt="Wine Tasting Crash Course" />
            </div>
            <h2 class="my-6 text-3xl font-extrabold text-gray-900">
            Free Wine Tasting Crash Course
          </h2>
          <div class="my-6 prose text-base text-gray-500">
            How to taste wine like a pro so you can effortlessely describe what you are seeing, smelling and tasting.
          </div>
          <h3 class="prose text-sm text-gray-900 font-semibold">What you will learn:</h3>
          <div class="my-1 prose text-sm text-gray-500">
            <ul>
              <li>
                  How to professionally taste a wine, step-by-step.
              </li>
              <li>
                  How to easily describe what you see, smell and taste.
              </li>
              <li>
                  How to confidently analyse and rate wines with a sip. 
              </li>
              <li class="text-gray-400 italic">
                  And much, much more...
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8">
          <div>
            <div class="mt-6 relative">
              <div class="absolute inset-0 flex items-center" aria-hidden="true">
                <div class="w-full border-t border-gray-300" />
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  Unlock Free Class
                </span>
              </div>
            </div>
          </div>

          <div class="mt-6">
            <form action="#" method="POST" class="space-y-6">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" required="" class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Start Watching Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </TransitionRoot>
    </div>
    <div class="hidden lg:block relative w-0 flex-1 bg-black">
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
      <img class="absolute inset-0 h-full w-full object-cover" src="@/assets/images/register/Wine-Tasting-Crash-Course.jpg" alt="Wine Tasting Crash Course" />
      </TransitionRoot>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { TransitionRoot } from '@headlessui/vue'

export default {
  components: { TransitionRoot },
  
  setup() {
    const isShowing = ref(true)
    return {
      isShowing
    }
  },
}
</script>