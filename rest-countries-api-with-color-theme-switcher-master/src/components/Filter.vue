<template>
  <div class="relative">
    <div 
      @click="openDropdown" 
      ref="input"
      tabindex="0" 
      class="dark:bg-gray-800 dark:text-gray-100 bg-gray-200 text-gray-700 flex flex-row-reverse gap-5 p-4 justify-end rounded cursor-pointer focus:outline-none focus:ring-1 focus:ring-gray-600">
      <span class="mr-4">{{ selectedRegion }}</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <ul class="dark:bg-gray-800 bg-gray-200 rounded mt-1 text-left p-5 dark:text-gray-100 text-gray-700 absolute w-full" :class="isShowingStyle">
      <li @click="selectRegion(region)" class="cursor-pointer my-2" :key="region" v-for="region in regions">
        {{ region }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { useFilter } from '../composables/useFilter'

  export default {
    name: 'Filter',
    setup(_, { emit }) {
      const filterOptions = useFilter(emit)

      return filterOptions
    }
  }
</script>

<style scoped>

</style>