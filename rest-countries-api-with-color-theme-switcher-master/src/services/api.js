import axios from 'axios'

const api = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2'
})

export async function getCountryByName(countryName) {
  const response = await api.get(`/name/${countryName}`)

  return response.data[0]
}