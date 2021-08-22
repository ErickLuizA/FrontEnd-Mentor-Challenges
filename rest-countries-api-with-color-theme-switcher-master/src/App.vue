<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    setup() {
      const isLight = localStorage.getItem('light')
      const rootClassList = document.documentElement.classList

      if(isLight) {
        rootClassList.remove('dark')
      }
    }
  }
</script>
