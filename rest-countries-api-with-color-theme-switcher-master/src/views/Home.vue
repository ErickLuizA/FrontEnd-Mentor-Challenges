<template>
    <div>
      <Header />
      <div class="flex flex-col gap-4 sm:flex-row sm:justify-between max-w-screen-xl mx-auto p-5 xl:pr-0 xl:pl-0">
        <Search @searchEvent="searchForCountry" />
        <Filter @filterByRegion="filterByRegion" />
      </div>
      <ul class="flex flex-wrap gap-5 items-start justify-center sm:justify-start max-w-screen-xl mx-auto p-5 xl:p-0">
        <Card :key="country.name" :country="country" v-for="country in countries" />
      </ul>
    </div>
</template>

<script>
import { ref } from 'vue'

import { getCountryByName } from '../services/api'

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
    const countries = ref([])

    const searchForCountry = async (countryName) => {
      try {
        const response = await getCountryByName(countryName)
        
        countries.value.push(response)
      } catch (error) {
        console.log(error)
      }
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