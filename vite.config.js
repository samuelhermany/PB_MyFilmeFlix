import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// npm run deploy
export default defineConfig({
  plugins: [react()],
  base: "/PB_MyFilmeFlix",
})

// Chave da API
// 1f851527dd64a98b5eb22d4d6733b9ef

// Token de Leitura da API
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjg1MTUyN2RkNjRhOThiNWViMjJkNGQ2NzMzYjllZiIsIm5iZiI6MTcyODIzMTI5OC44MDY4ODQsInN1YiI6IjY3MDJiNWIyZmEzZTY5ZTBlZjdkNDM3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1-zSrKA0_ProRqZMmY8gmwX_X_KMdyxb4GUbI444t_w