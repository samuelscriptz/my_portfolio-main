import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                profile: resolve(__dirname, 'public/profile.html'),
                admin: resolve(__dirname, 'public/admin.html'),
            },
        },
    },
    server: {
        port: 3000,
        proxy: {
            '/api': 'http://localhost:5000',
        },
    },
});
