import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default {
  base: '/mind-space',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
}
