<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsFacebookSquare from 'svelte-icons-pack/fa/FaBrandsFacebookSquare';
	import FaBrandsTwitterSquare from 'svelte-icons-pack/fa/FaBrandsTwitterSquare';
	import FaBrandsGoogle from 'svelte-icons-pack/fa/FaBrandsGoogle';
	import FaSolidGlobe from 'svelte-icons-pack/fa/FaSolidGlobe';
	import { base } from '$app/paths';

	const currYear = new Date().getFullYear();
</script>

<footer
	class="w-full relative h-44 bg-blue-900 dark:bg-primary px-20 flex justify-between items-center "
>
	<ul class="w-3/6 flex px-48 font-serif  font-semibold flex-wrap text-secondary justify-around">
		<li><a class="hover:underline" href="{base}/">Home</a></li>
		<li><a class="hover:underline" href="{base}/about">About</a></li>
		<li><a class="hover:underline" href="{base}/contact">Contact</a></li>
	</ul>
	<div class="flex w-1/6 items-center justify-between">
		<a class="text-2xl mx-1 text-primary" href="">
			<Icon color="white" src={FaBrandsFacebookSquare} />
		</a>
		<a class="text-2xl mx-1 text-blue-400" href="">
			<Icon color="#1DA1F2" src={FaBrandsTwitterSquare} />
		</a>
		<a class="text-2xl mx-1 text-red-400" href="">
			<Icon color="red" src={FaBrandsGoogle} />
		</a>
		<a class="text-2xl mx-1 text-gray-900" href="">
			<Icon color="gray" src={FaSolidGlobe} />
		</a>
	</div>
	<span
		class="w-full h-10 text-white justify-center align-middle left-0 absolute bottom-0 text-center bg-blue-900 dark:bg-primary font-serif"
		>&copy {currYear} by
		<a class="underline" href="https://github.com/faeztgh">Faeztgh</a>
	</span>
</footer>
