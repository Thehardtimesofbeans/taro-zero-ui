import { defineConfig } from "vite";

export default defineConfig({
    // 添加库模式配置

    build: {
        minify: `terser`, // boolean | 'terser' | 'esbuild'
        sourcemap: true, // 输出单独 source文件
        brotliSize: true, // 生成压缩大小报告
        lib: {
            entry: "./src/index.ts",
            name: "demoui",
            fileName: "demoui",
            formats: ["esm", "umd", "iife"], // 导出模块类型
        },
        outDir: "./dist",
    },
});