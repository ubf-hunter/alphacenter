import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@i18n': '/src/i18n'
    }
  },
  build: {
    // Optimisation pour production
    minify: 'esbuild',
    sourcemap: false,
    // Code splitting pour de meilleures performances
    rollupOptions: {
      output: {
        manualChunks: {
          // Separer les vendors pour meilleur caching
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', 'lucide-react'],
          'vendor-seo': ['react-helmet-async', 'react-ga4'],
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector']
        }
      }
    },
    // Avertir si un chunk depasse 500kb
    chunkSizeWarningLimit: 500
  }
})
