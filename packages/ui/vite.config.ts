import { defineConfig } from "vite";
import path from 'path'
import config from './package.json'


const externalPackages = [
    'react',
    'react-dom',
    '@tarojs/react',
    '@tarojs/taro',
    '@tarojs/components',
    '@tarojs/runtime',
]

export default defineConfig({
    plugins: [],
    // 添加库模式配置
    build: {
        minify: false, // boolean | 'terser' | 'esbuild'
        rollupOptions: {
            // 请确保外部化那些你的库中
            external: externalPackages, // 将以上模块保留在bundle之外,不让以上插件打包到组件库中
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
                plugins: [],
            }
        },

        sourcemap: true, // 输出单独 source文件

        lib: {
            entry: "./src/index.ts",
            name: "zeroui",
            fileName: "zeroui",
            formats: ["es", "umd", "iife"], // 导出模块类型
        },
        outDir: "./dist",
    },
});