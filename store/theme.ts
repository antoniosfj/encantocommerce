import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

type ColorTheme = 'dark' | 'light'

export const useThemeStore = defineStore('theme', () => {
  const theme: Ref<ColorTheme> = ref(useLocalStorage<ColorTheme>('theme', 'dark'))

  function toggleTheme() {
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