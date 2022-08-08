// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(
		preprocess({
			postcss: true
		})
	),

	kit: {
		prerender: {
			default: true
		},
		adapter: adapter({
			pages: 'build', // path to public directory
			assets: 'build', // path to public directory
			fallback: null
		})
	}
};

export default config;
