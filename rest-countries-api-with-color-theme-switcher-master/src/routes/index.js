import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Details from '../views/Details.vue'

const history = createWebHistory()

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:name',
    name: 'Details',
    component: Details,
    props: route => {
      return { 
        country: {
          name: route.params.name,
          population: route.params.population,
          region: route.params.region,
          capital: route.params.capital,
          flag: route.params.flag,
          nativeName: route.params.nativeName,
          subregion: route.params.subregion,
          topLevelDomain: route.params.topLevelDomain,
          currencies: route.params.currencies,
          languages: route.params.languages,
          borders: route.params.borders,
        },
        fromComponent: route.params.fromComponent ? true : false
      }
    }
  }
]

const router = createRouter({
  routes,
  history,
})

export default router