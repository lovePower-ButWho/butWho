import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    plugins: [react()],
    server: {
        proxy:{
            '/result': 'http://www.but-who.shop:8080',
        }
    }
})