// Plugins
import Vue from '@vitejs/plugin-vue'
import Vuetify, {transformAssetUrls} from 'vite-plugin-vuetify'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// Utilities
import {defineConfig} from 'vite'
import {fileURLToPath, URL} from 'node:url'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      template: {transformAssetUrls}
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
    }),
    ViteImageOptimizer({
      /* options de configuration si nécessaire */
      test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
    }),
  ],
  ssr: {
    noExternal: ['vuetify'],
  },
  define: {
    'process.env': {
      PACKAGE_VERSION: JSON.stringify(packageJson.version)
      // Ajoutez d'autres valeurs du package.json que vous souhaitez exposer
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
  },
  server: {
    port: 8080,
    proxy: {
      '/google': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/google/, ''),
      }
    }
  }
})
