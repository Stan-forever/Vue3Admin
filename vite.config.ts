import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createStyleImportPlugin, ElementPlusResolve } from 'vite-plugin-style-import'
import { viteMockServe } from 'vite-plugin-mock'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },

    plugins: [
        vue()
        // 配置mock
        // viteMockServe({
        //     mockPath: '/mock',
        //     localEnabled: true
        // })
    ],
    server: {
        port: 8080,
        hmr: {
            host: '127.0.0.1',
            port: 8080
        },
        proxy: {
            '/api': {
                target: 'https://mock.mengxuegu.com/mock/629d727e6163854a32e8307e',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
})
