<template>
  <div class="bg-gray-50">
    <div class="mx-auto pb-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
      <div class="space-y-12">
        <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
          <TransitionRoot appear :show="isShowing" enter="transition-all ease-in duration-100" enter-from="opacity-0" enter-to="opacity-100" leave="transition-all ease-in duration-100" leave-from="opacity-100" leave-to="opacity-0">
            <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Courses</h2>
          </TransitionRoot>
        </div>
        <ul class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li v-for="course in courses" :key="course.id">
            <TransitionRoot appear :show="isShowing" enter="transition-all ease-in duration-100" enter-from="opacity-0" enter-to="opacity-100" leave="transition-all ease-in duration-100" leave-from="opacity-100" leave-to="opacity-0">
              <router-link :to="{ name: 'Course', params: { slug: course.slug } }">
                <div class="space-y-4">
                  <div class="aspect-w-16 aspect-h-9">
                    <img class="object-cover shadow-2xl rounded-xl" :src="course.image" :alt="course.title" />
                  </div>
                  <div class="space-y-2">
                    <div class="text-lg leading-6 font-medium space-y-1">
                      <h3>{{ course.title }}</h3>
                      <p class="text-indigo-600">
                        <span v-if="course.price == 0">Free</span><span v-else>${{ course.price }}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </router-link>
            </TransitionRoot>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from "vue";
  import { TransitionRoot } from "@headlessui/vue";
  import courses from "@/assets/data/courses.js";

  export default {
    components: { TransitionRoot },
    setup() {
      const isShowing = ref(true);
      return {
        isShowing,
        courses: courses.courses,
      };
    },
  };
</script>
