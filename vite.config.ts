import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
    plugins: [
        /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
        // devtools(),
        solidPlugin(),
    ],
    build: {
        target: 'esnext',
        outDir: 'dist/solid',
        rollupOptions: {
            input: {
                renderer: 'src/solid/renderer.ts',
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name]-[hash].js',
                assetFileNames: '[name].css',
            },
            watch: {
                include: ['src/solid/**/*'],
            },
        },
    },
});
