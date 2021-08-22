<template>
  <div class="flex items-center">

    <span @click="searchForCountry" class="absolute pl-5 dark:text-gray-100 text-gray-700">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </span>

    <input 
      class="dark:bg-gray-800 bg-gray-200 w-full shadow dark:text-gray-100 text-gray-700 pl-16 py-4 rounded focus:outline-none focus:ring-1 focus:ring-gray-600" 
      v-model="countryName"
      @keyup.enter="searchForCountry"
      type="search" name="search" autocomplete="off" placeholder="Search for a country...">
  </div>
</template>

<script>

  import { ref } from 'vue'

  export default {
    name: 'Search',
    setup(_, { emit }) {
      const countryName = ref('')

      const searchForCountry = () => {
        emit('searchEvent', countryName.value)

        countryName.value = ''
      }

      return {
        countryName,
        searchForCountry
      }
    }
  }

</script>