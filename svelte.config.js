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
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			// change below to your repo name
			base: '/blog-sveltekit'
		}
		// hydrate the <div id="svelte"> element in src/app.html
	}
};

export default config;
