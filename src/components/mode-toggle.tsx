import { Moon, Sun } from 'lucide-react'

import { useTheme } from '@/components/theme-provider'

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="cursor-pointer">
      {theme == 'light' ? (
        <Sun
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          onClick={() => setTheme('dark')}
        />
      ) : (
        <Moon
          className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          onClick={() => setTheme('light')}
        />
      )}
    </div>
  )
}
