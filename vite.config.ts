/// <reference types='vitest' />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
	server: {
		port: 4200,
		host: 'localhost',
	},
	preview: {
		port: 4300,
		host: 'localhost',
	},
	base: './',
	plugins: [react()],

	build: {
		outDir: './dist',
		emptyOutDir: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
});
