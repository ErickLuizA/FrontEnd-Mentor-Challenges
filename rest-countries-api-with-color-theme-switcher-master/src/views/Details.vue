<template>
  <div>
    <Header />
    <div class="flex flex-col items-start max-w-screen-xl mx-auto p-5 xl:p-0 mt-10">
      <button @click="goBack" class="flex self-start gap-3 text-gray-800 bg-gray-200 dark:text-gray-100 dark:bg-gray-800 shadow-md py-2 px-8 mb-10 rounded hover:opacity-70">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      <div v-if="!state.loading" class="flex flex-col gap-10 md:flex-row ">
        <img class="rounded-t w-full md:w-3/5 self-start" :src="state.country.flag" :alt="state.country.name">

        <div class="flex flex-col items-start gap-10">
          <div class="flex flex-col gap-10 md:flex-row md:items-center md:gap-20">
            <div>
              <h1 class="dark:text-gray-100 text-gray-900 text-3xl font-bold mb-10"> {{ state.country.name }}
              </h1>
              <p class="dark:text-gray-300 text-gray-900 mb-2">
                <span class="font-semibold dark:text-gray-100 text-gray-700">
                  Native Name:
                </span> 
                {{ state.country.nativeName }}
              </p>
              <p class="dark:text-gray-300 text-gray-900 mb-2">
                <span class="font-semibold dark:text-gray-100 text-gray-700">
                  Population:
                </span> 
                {{ state.country.population }}
              </p>
              <p class="dark:text-gray-300 text-gray-900 mb-2">
                <span class="font-semibold dark:text-gray-100 text-gray-700">
                  Region:
                </span>
                {{ state.country.region }}
              </p>
              <p class="dark:text-gray-300 text-gray-900 mb-2">
                <span class="font-semibold dark:text-gray-100 text-gray-700">
                  Sub Region:
                </span>
                {{ state.country.subregion }}
              </p>
              <p class="dark:text-gray-300 text-gray-900 mb-2">
                <span class="font-semibold dark:text-gray-100 text-gray-700">
                  Capital:
                </span>
                {{ state.country.capital }}
              </p>
            </div>
            <div class="flex flex-col items-start">
              <p class="dark:text-gray-300 text-gray-900 mb-2">
                <span class="font-semibold dark:text-gray-100 text-gray-700">
                  Region:
                </span>
                {{ state.country.region }}
              </p>
              <p class="dark:text-gray-300 text-gray-900 mb-2">
                <span class="font-semibold dark:text-gray-100 text-gray-700">
                  Sub Region:
                </span>
                {{ state.country.subregion }}
              </p>
              <p class="dark:text-gray-300 text-gray-900 mb-2">
                <span class="font-semibold dark:text-gray-100 text-gray-700">
                  Capital:
                </span>
                {{ state.country.capital }}
              </p>
            </div>
          </div>
          <div class="flex flex-col gap-2">
              <p class="font-semibold dark:text-gray-100 text-gray-700 ">
                Border Countries
              </p>
              <div class="flex flex-wrap gap-2">
                <button :key="border" v-for="border of state.country.borders" class="text-gray-100 bg-gray-800 shadow-md py-1 px-6 rounded hover:opacity-70">
                  {{ border }}
                </button>
              </div>
          </div>
        </div>
      </div>
 
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

import { getCountryByName } from '../services/api'

import Header from '../components/Header.vue'

export default {
  components: {
    Header
  },
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
    },
    fromComponent: Boolean
  },

  setup(props) {
    const router = useRouter()
    const state = reactive({
      country: props.country,
      loading: true,
    })

    onMounted(async () => {
      if(props.fromComponent) {
        state.loading = false
      } else {
        try {
          const response = await getCountryByName(props.country.name)
          
          state.country = response
          state.loading = false
        } catch (error) {
          console.log(error)
        }
      }
    })

    const goBack = () => {
      router.push('/')
    }
    
    return {
      state,
      goBack
    }
  }
}
</script>