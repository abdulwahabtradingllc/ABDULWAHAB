import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  //  base: '/WhiteMatrix_AbdhulWahabTradingLLC/', // 👈 important! matches your repo name
  base:'./',
  server: {
    port: 5173
  }
})