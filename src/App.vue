<template>
    <main>
      <div class="min-h-screen bg-gray-50"> 
        <TheNavigation />
          <main>
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div class="px-4 py-8 sm:px-0">
                <!-- Replace with your content -->
                <router-view/>
                <!-- /End replace -->
              </div>
            </div>
          </main>
        </div>
    </main>
</template>

<script>
import { defineComponent } from 'vue'
import TheNavigation from '@/components/TheNavigation.vue'

export default defineComponent({
  components: { TheNavigation },
})
</script>
