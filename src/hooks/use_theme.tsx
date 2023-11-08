import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
export const useTheme = () => {
  const [theme, _setTheme] = useState<Theme>((): Theme => {
    const value = localStorage.getItem('theme') || 'light'
    return (['light', 'dark'].includes(value) ? value : 'light') as Theme
  })

  const invertTheme = (value: Theme) => {
    const color = ['light', 'dark'].includes(value) ? value : 'light'
    return color === 'dark' ? 'light' : 'dark'
  }

  const setTheme = (string: Theme) => {
    const color = ['light', 'dark'].includes(string) ? string : 'light'
    _setTheme(color)
    localStorage.setItem('theme', color)
  }

  const toggleTheme = () => {
    _setTheme(invertTheme(theme))
    localStorage.setItem('theme', invertTheme(theme))
  }

  useEffect(() => {
    const classList = document.documentElement.classList
    classList.add(theme)
    classList.remove(invertTheme(theme))
  }, [theme])

  return { theme, setTheme, toggleTheme }
}
