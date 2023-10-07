import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref(useLocalStorage('theme', 'dark'))

  function toggleTheme() {
    console.log('Toggled')
    if (!theme.value || theme.value === 'light') {
      theme.value = 'dark'
      if (document) document.documentElement.classList.add('dark')
    } else {
      theme.value = 'light'
      if (document) document.documentElement.classList.remove('dark')
    }
  }

  return { theme: skipHydrate(theme), toggleTheme }
})