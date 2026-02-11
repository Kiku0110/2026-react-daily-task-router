import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base:process.env.NODE_ENV === 'production'? '/2026-react-daily-task-router/':'/',  
  plugins: [react()],
})
