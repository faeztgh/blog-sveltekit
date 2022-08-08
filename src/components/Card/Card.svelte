<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	export /**
	 * @type {{ image: string | null | undefined; }}
	 */
	let props;
	const { id, title, slug, status, description, image } = props;
</script>

{#if !$page.url.pathname.includes(slug) && status === 'published'}
	<a
		sveltekit:prefetch
		sveltekit:reload
		href="{base}/blog/{slug}"
		class="flex flex-col w-3/4 mx-5 h-32 my-5 max-w-sm items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
	>
		<img
			class=" w-full h-96 rounded-t-lg md:h-[inherit] md:w-48 md:rounded-none md:rounded-l-lg"
			src={image}
			alt={title}
		/>
		<div class="flex flex-col py-5 justify-between px-4 leading-normal">
			<h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>
		</div>
	</a>
{/if}
