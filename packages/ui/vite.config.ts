import { defineConfig } from "vite";

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
        rollupOptions: {
            external: externalPackages,
            output: {

            }
        },
        minify: `esbuild`, // boolean | 'terser' | 'esbuild'
        sourcemap: true, // 输出单独 source文件
        brotliSize: true, // 生成压缩大小报告
        lib: {
            entry: "./src/index.ts",
            name: "zeroui",
            fileName: "zeroui",
            formats: ["esm", "umd", "iife"], // 导出模块类型
        },
        outDir: "./dist",
    },
});