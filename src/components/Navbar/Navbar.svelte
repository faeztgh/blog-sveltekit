<script lang="ts" context="module">
	import { base } from '$app/paths';

	let searchInput: any = '';
	const search = (e: any) => {
		if (e.key !== 'Enter') return;
		const articleObj = data.find((item) => {
			if (
				item.title.includes(searchInput) ||
				item.description.includes(searchInput) ||
				item.author.name.includes(searchInput) ||
				item.author.lastName.includes(searchInput)
			) {
				return item;
			}
		});
		if (articleObj?.slug == undefined) return;
		routeToPage(`/blog/${articleObj?.slug}`);
	};
</script>

<script lang="ts">
	import { scale, fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import logo from '../../assets/logo.svg';
	import { data } from '../../data/data';
	import routeToPage from '../../utils/RouteToPage';
	import FaSolidSun from 'svelte-icons-pack/fa/FaSolidSun';
	import FaSolidMoon from 'svelte-icons-pack/fa/FaSolidMoon';
	import Icon from 'svelte-icons-pack/Icon.svelte';

	let ready = false;
	onMount(() => (ready = true));

	export let theme: string;
	let isDark = theme === 'dark' ? true : false;
	const handleDarkMode = () => {
		if (theme === 'dark') {
			isDark = false;
			theme = 'light';
		} else {
			isDark = true;
			theme = 'dark';
		}
	};
</script>

<nav
	class="w-full sticky  top-0 z-30 bg-secondary text-primary px-20 py-3 h-16 dark:bg-primary dark:text-secondary flex justify-between align-middle"
>
	<a href="/">
		<img class="h-16 w-16 drop-shadow-lg absolute left-5" src={logo} alt="logo" />
	</a>
	<ul
		class="flex justify-between pt-1 w-full max-w-lg text-2xl font-bold text-black dark:text-white"
	>
		<li class="flex flex-col relative">
			<a href="{base}/">Home</a>
			{#if $page.url.pathname == '/' && ready}
				<span
					transition:scale
					class="h-0.5 z-20 w-16 px-9  absolute -bottom-1 self-center rounded-full  bg-primary dark:bg-secondary"
				/>
			{/if}
		</li>
		<li class="flex flex-col relative">
			<a href="{base}/about">About</a>
			{#if $page.url.pathname == '/about' && ready}
				<span
					transition:scale
					class="h-0.5 z-20 w-16 px-9  absolute -bottom-1 self-center rounded-full  bg-primary dark:bg-secondary"
				/>
			{/if}
		</li>
		<li class="flex flex-col relative">
			<a href="{base}/contact">Contact</a>
			{#if $page.url.pathname == '/contact' && ready}
				<span
					transition:scale
					class="h-0.5 z-20 w-20 px-11  absolute -bottom-1 self-center rounded-full bg-primary dark:bg-secondary"
				/>
			{/if}
		</li>
	</ul>
	<div class="max-w-lg w-full lg:max-w-xs">
		<label for="search" class="sr-only">Search </label>
		<form type="search" action="#" class="relative z-50">
			<button
				type="submit"
				id="searchsubmit"
				class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
			>
				<svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
					<path
						fill-rule="evenodd"
						d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<input
				type="search"
				class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-red-200 dark:bg-sky-200 init text-gray-500 placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out"
				placeholder="Search"
				on:keydown={(e) => search(e)}
				on:input={(item) => (searchInput = item?.target?.value)}
			/>
		</form>
	</div>
	<div class="mx-2">
		<button
			class="rounded-lg bg-gray-200 hover:shadow-lg border shadow w-9 h-9 flex items-center justify-center"
			on:click={handleDarkMode}
		>
			{#if isDark}
				<span in:fade={{ duration: 150 }} out:fade={{ duration: 300 }}>
					<Icon color="#FFFF8A" size="20px" src={FaSolidSun} />
				</span>
			{:else}
				<span in:fade={{ duration: 150 }} out:fade={{ duration: 300 }}>
					<Icon color="#FFF" size="20px" src={FaSolidMoon} />
				</span>
			{/if}
		</button>
	</div>
</nav>
