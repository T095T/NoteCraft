import path from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/renderer/src'),
        '@shared': path.resolve(__dirname, 'src/renderer/src/shared'),
      }
    }
  },

  preload: {
    plugins: [externalizeDepsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/renderer/src'),
        '@shared': path.resolve(__dirname, 'src/renderer/src/shared'),
      }
    }
  },

  renderer: {
    assetsInclude: 'src/renderer/assets/**',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/renderer/src'),
        '@shared': path.resolve(__dirname, 'src/renderer/src/shared'),
        '@renderer': path.resolve(__dirname, 'src/renderer/src'),
        '@/hooks': path.resolve(__dirname, 'src/renderer/src/hooks'),
        '@/assets': path.resolve(__dirname, 'src/renderer/src/assets'),
        '@/store': path.resolve(__dirname, 'src/renderer/src/store'),
        '@/components': path.resolve(__dirname, 'src/renderer/src/components'),
        '@/mocks': path.resolve(__dirname, 'src/renderer/src/mocks'),
      }
    },
    plugins: [react()]
  }
})
