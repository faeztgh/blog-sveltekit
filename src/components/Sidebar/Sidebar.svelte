<script lang="ts">
		import { blur } from 'svelte/transition';
		import { base } from '$app/paths';

	export let isfferBoxOpen = true;
</script>

<aside class="w-64 relative " aria-label="Sidebar">
	<div class="overflow-y-auto py-4 px-3 top-36 sticky bg-gray-50 rounded dark:bg-gray-800 shadow-md">
		<ul class="space-y-2">
			<li>
				<a
					href="{base}/"
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<svg
						aria-hidden="true"
						class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" /><path
							d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
						/></svg
					>
					<span class="ml-3">Posts</span>
				</a>
			</li>
			<li>
				<a
					href="#"
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<svg
						aria-hidden="true"
						class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
						/></svg
					>
					<span class="flex-1 ml-3 whitespace-nowrap">Write</span>
					<span
						class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"
						>Pro</span
					>
				</a>
			</li>
			<li>
				<a
					href="{base}/login"
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<svg
						aria-hidden="true"
						class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
							clip-rule="evenodd"
						/></svg
					>
					<span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
				</a>
			</li>
			<!-- <li>
				<a
					href="#"
					class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
				>
					<svg
						aria-hidden="true"
						class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
							clip-rule="evenodd"
						/></svg
					>
					<span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
				</a>
			</li> -->
		</ul>
		{#if isfferBoxOpen}
			<div 
			transition:blur
			id="dropdown-cta" class="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert">
				<div class="flex items-center mb-3">
					<span
						class="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900"
						>Beta</span
					>
					<button
						type="button"
						class="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
						data-collapse-toggle="dropdown-cta"
						aria-label="Close"
						on:click={() => (isfferBoxOpen = false)}
					>
						<span class="sr-only">Close</span>
						<svg
							aria-hidden="true"
							class="w-4 h-4"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							><path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							/></svg
						>
					</button>
				</div>
				<p class="mb-3 text-sm text-blue-900 dark:text-blue-400">Special offer for new members!</p>
				<a
					class="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
					href="#">Subscribe Now</a
				>
			</div>
		{/if}
	</div>
</aside>
