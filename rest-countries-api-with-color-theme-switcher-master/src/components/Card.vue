<template>
  <router-link
   :to="navigateToDetailsDescriptor" class="w-full sm:w-80">
    <img class="rounded-t h-auto" :src="country.flag" :alt="country.name">
    <div class=" flex flex-col items-baseline p-4 dark:bg-gray-800 bg-gray-200 rounded-b">
      <h1 class="dark:text-gray-100 text-gray-900 text-xl font-bold mb-4"> {{ country.name }} </h1>
      <p class="dark:text-gray-300 text-gray-900">
         <span class="font-semibold dark:text-gray-100 text-gray-700">
           Population:
        </span> {{ country.population }} </p>
      <p class="dark:text-gray-300 text-gray-900">
         <span class="font-semibold dark:text-gray-100 text-gray-700">
           Region:
        </span> {{ country.region }} </p>
      <p class="dark:text-gray-300 text-gray-900">
         <span class="font-semibold dark:text-gray-100 text-gray-700">
           Capital:
        </span> {{ country.capital }} </p>
    </div>
  </router-link>
</template>

<script>
  export default {
    props: {
      country: {
        name: String,
        population: Number,
        region: String,
        capital: String,
        flag: String,
        nativeName: String,
        subregion: String,
        topLevelDomain: Array,
        currencies: Array,
        languages: Array,
        borders: Array
      }
    },
    setup(props) {
      const navigateToDetailsDescriptor = {
        name: 'Details',
        params: { 
          name: props.country.name, 
          population: props.country.population, 
          region: props.country.region, 
          capital: props.country.capital,
          flag: props.country.flag,
          nativeName: props.country.nativeName,
          subregion: props.country.subregion,
          topLevelDomain: props.country.topLevelDomain,
          currencies: props.country.currencies,
          languages: props.country.languages,
          borders: props.country.borders,
          fromComponent: true
        }
      }

      return {
        navigateToDetailsDescriptor
      }
    }
  }
</script>