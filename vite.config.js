import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// npm run deploy
export default defineConfig({
  plugins: [react()],
  base: "/PB_MyFilmeFlix",
})
