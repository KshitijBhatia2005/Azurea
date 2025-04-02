import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from network
    port: 5173, // Change if needed
    strictPort: true, // Ensures the port is not changed
    allowedHosts: ['localhost', 'your-domain.com','azurea.onrender.com'], // Add domains that can access the server
  },
})
