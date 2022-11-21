import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useHeroesStore = defineStore('heroes', () => {

  const count = ref(0)

  const mult = computed(() => {
    return count.value * 2 
  })

  return {
    count,
    mult
  }
})
