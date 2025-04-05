import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	build: {
		emptyOutDir: true,
		lib: {
			entry: [
				'./src/component.ts',
			],
			formats: ['es'],
		},
		minify: false,
		outDir: 'dist',
		sourcemap: 'inline',
		target: 'esnext',
	},
	plugins: [dts()],
});
