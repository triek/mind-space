import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default {
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
}
