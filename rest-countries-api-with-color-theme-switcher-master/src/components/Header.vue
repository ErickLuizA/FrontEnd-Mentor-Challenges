<template>
  <div class="dark:bg-gray-800 bg-gray-200 shadow-md">
    <div class="flex flex-row justify-between items-center p-5 max-w-screen-xl mx-auto xl:pl-0 xl:pr-0">
      <h1 class="dark:text-gray-100 text-gray-800 md:text-2xl">Where in the world?</h1>

      <div class="cursor-pointer hover:opacity-70" v-on:click="toggleTheme">
        <svg class="dark:text-gray-100 inline h-4 w-4 sm:h-6 sm:w-6" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <span class="dark:text-gray-100 text-gray-700 ml-2 align-middle text-sm md:text-base">Dark Mode</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    setup() {
      const toggleTheme = () => {
        const rootClassList = document.documentElement.classList

        if(rootClassList.contains('dark')) {
          rootClassList.remove('dark')
        } else {
          rootClassList.add('dark')
        }
      }

      return {
        toggleTheme
      }
    }
  }
</script>
