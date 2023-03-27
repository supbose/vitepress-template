import { ConfigEnv, defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { SearchPlugin } from '@qingshu/vitepress-plugin-search'
export default defineConfig((env: ConfigEnv) => {
  return {
    plugins: [
      vueJsx(),
      SearchPlugin({
        previewLength: 20,
        buttonLabel: '搜索',
        placeholder: '文章搜索',
        tokenize: 'full',
      }),
    ],
    build: {
      sourcemap: false,
      outDir: 'dist', //指定输出路径
      // assetsDir: 'static/img/', // 指定生成静态资源的存放路径
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              const arr = id.toString().split('node_modules/')[1].split('/')
              switch (arr[0]) {
                case '@kangc':
                case '@naturefw':
                case '@popperjs':
                case '@vue':
                case 'axios':
                case 'element-plus':
                  return '_' + arr[0]
                  break
                default:
                  return '__vendor'
                  break
              }
            }
          },
          chunkFileNames: 'static/js1/[name]-[hash].js',
          entryFileNames: 'static/js2/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        },
        brotliSize: false, // 不统计
        target: 'esnext',
        minify: 'esbuild', // 混淆器，terser构建后文件体积更小
      },
    },
  }
})
