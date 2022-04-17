import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'

import path from 'path'

const resolve = str => path.resolve(__dirname, str)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
    // AutoImport({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    // ElementPlus()
  ],
  resolve: {
    alias: {
      '@': resolve('src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
})
