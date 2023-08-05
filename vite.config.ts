import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import viteEslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteEslint()]
})
