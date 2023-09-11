import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteEslint from 'vite-plugin-eslint'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import path from 'path'

function AplayerResolve() {
  return {
    libraryName: '@APlayer/APlayer',
    libraryNameChangeCase: 'pascalCase',
    resolveStyle: () => {
      return `@APlayer/APlayer/dist/APlayer.min.css`
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]'
    }),
    AplayerResolve()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
