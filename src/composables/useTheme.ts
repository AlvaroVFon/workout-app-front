import { ref, watch } from 'vue'
import { Themes } from '../utils/themes.enum'

export function useTheme() {
  const availableThemes = Object.values(Themes)
  const currentTheme = ref(localStorage.getItem('theme'))

  const setTheme = (theme: string) => {
    currentTheme.value = theme
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }

  watch(currentTheme, (theme) => {
    if (theme) document.documentElement.setAttribute('data-theme', theme)
  })

  return {
    availableThemes,
    theme: currentTheme,
    setTheme,
  }
}
