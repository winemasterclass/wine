<template>
  <TheNavigation />
  Classes
  <ul>
    <li v-for="Class in Classes" :key="Class.id" >
      <router-link :to="{ name: 'Class', params: { slug: Class.slug}}">
        {{ Class.title }}
      </router-link>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
import TheNavigation from '@/components/TheNavigation.vue'

export default defineComponent({
  components: { TheNavigation },
  setup() {
    return {
      Classes,
    }
  },
})

const Classes = [
  {id: 1, title:'Class One', slug:'course-one', summary:'This is course one.'},
  {id: 2, title:'Class Two',  slug:'course-two', summary:'This is course two.'},
  {id: 3, title:'Class Three', slug:'course-three', summary:'This is course three.'}
]

</script>
