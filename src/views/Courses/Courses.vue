<template>
  <ul class="space-y-3">
    <li v-for="Course in Courses" :key="Course.id" >
      <router-link :to="{ name: 'Course', params: { slug: Course.slug}}">
        <div class="bg-white shadow overflow-hidden rounded-md px-6 py-4">
        {{ Course.title }}
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {
      Courses,
    }
  },
})

const Courses = [
  {id: 1, title:'Course One', slug:'course-one', summary:'This is course one.'},
  {id: 2, title:'Course Two',  slug:'course-two', summary:'This is course two.'},
  {id: 3, title:'Course Three', slug:'course-three', summary:'This is course three.'}
]

</script>
