import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/nithin-portfolio-deploy/",  // 👈 your GitHub repo name here
  plugins: [react()],
})
