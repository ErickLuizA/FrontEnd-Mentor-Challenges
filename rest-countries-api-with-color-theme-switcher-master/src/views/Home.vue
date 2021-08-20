<template>
    <div id="app">
      <Header />
      <div class="flex justify-between items-baseline max-w-screen-xl mx-auto p-5 xl:pr-0 xl:pl-0">
        <Search @searchEvent="searchForCountry" />
        <Filter @filterByRegion="filterByRegion" />
      </div>
      <ul class="flex flex-wrap  max-w-screen-xl mx-auto p-5 xl:pr-0 xl:pl-0">
        <Card :key="country.name" :country="country" v-for="country in countries" />
      </ul>
    </div>
</template>

<script>
 import { inject, ref } from 'vue'

  import Header from '../components/Header.vue'
  import Search from '../components/Search.vue'
  import Filter from '../components/Filter.vue'
  import Card from '../components/Card.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      Search,
      Filter,
      Card
    },
    setup() {
      const axios = inject('axios')
      
      const countries = ref([])

      const searchForCountry = async (countryName) => {
        axios.get(`https://restcountries.eu/rest/v2/name/${countryName}`).then(res => {
          countries.value.push(res.data[0])
        }).catch(error => console.log(error))
      }

      const filterByRegion = (region) => {
        countries.value = countries.value.filter(c => c.region === region)
      }

      return {
        countries,
        searchForCountry,
        filterByRegion
      }
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>