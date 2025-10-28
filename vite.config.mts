/// <reference types="vitest/config" />

import { fileURLToPath, URL } from 'node:url';
import Vue from '@vitejs/plugin-vue';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { configDefaults } from 'vitest/config';
import { defineConfig } from 'vite';


export default defineConfig({
    test: {
        // forks and vmForks don't work, threads and vmThreads are ok
        pool: 'forks',
        environment: 'happy-dom',
        exclude: [...configDefaults.exclude, 'e2e/**'],
        server: {
            deps: {
                inline: ['vuetify'], // https://vuetifyjs.com/en/getting-started/unit-testing/
            },
        },
    },

    plugins: [
        Vue({
            template: { transformAssetUrls },
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
        Vuetify({
            autoImport: true,
        }),
    ],
    optimizeDeps: {
        exclude: ['vuetify'], // like in vuetify starter template
    },
    define: { 'process.env': {} },
    resolve: {
        alias: {
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
            '@tests': fileURLToPath(new URL('./src/tests', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
        extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    server: {
        port: 3000,
    },
});
