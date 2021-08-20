import { computed, onBeforeMount, onBeforeUnmount, ref } from 'vue'

export function useFilter(emit) {
  const isSelected = ref(false)
  const regions = ref(['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'])
  const selectedRegion = ref('Filter by region')

  const isShowingStyle = computed(() => ({
    'block': isSelected.value,
    'hidden': !isSelected.value
  }))

  const openDropdown = () => {
    isSelected.value = !isSelected.value
  }

  const selectRegion = (region) => {
    emit('filterByRegion', region)

    isSelected.value = false
    selectedRegion.value = region
  }

  const focusChanged = () => {
    isSelected.value = false
  }

  onBeforeMount(() => {
    document.addEventListener("focusin", focusChanged);
  })

  onBeforeUnmount(() => {
    document.removeEventListener("focusin", focusChanged)
  })

  return {
    isSelected,
    regions,
    selectedRegion,
    isShowingStyle,
    openDropdown,
    selectRegion,
    focusChanged
  }
}