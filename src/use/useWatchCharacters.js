import { ref, watch } from 'vue'

export const limitedChars = ref(false)

export function useWatchCharacters(valueToWatch, maxChars = 100) {
  watch(valueToWatch, (newValue) => {
    if(newValue.length <= 90) {
      limitedChars.value = false
    } else {
      limitedChars.value = true
    }
    if(newValue.length === maxChars) {
      alert(`Only ${maxChars} chars allowed`)
    }
  })
}