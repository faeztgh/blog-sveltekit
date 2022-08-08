<script lang="ts">
	import { page } from '$app/stores';
	import { data } from '../../data/data';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaBrandsFacebookSquare from 'svelte-icons-pack/fa/FaBrandsFacebookSquare';
	import FaBrandsTwitterSquare from 'svelte-icons-pack/fa/FaBrandsTwitterSquare';
	import FaBrandsGoogle from 'svelte-icons-pack/fa/FaBrandsGoogle';
	import FaSolidGlobe from 'svelte-icons-pack/fa/FaSolidGlobe';
	import Card from '../../components/Card/Card.svelte';
	import Modal from '../../components/Modal/Modal.svelte';

	const slug = $page.params.slug;
	const blog = data.find((item) => item.slug === slug);
	const { title, author, image, createdAt, content } = blog as any;

	let isModalOpen = false;

	const handleClickOnAvatar = () => {
		isModalOpen = true;
	};
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>
<div>
	{#if isModalOpen}
		<Modal {author} bind:isModalOpen />
	{/if}
	<div class="flex justify-between">
		<div class="flex items-center">
			<img
				on:click={handleClickOnAvatar}
				class="w-14 h-14 rounded-full"
				src={author.avatar}
				alt="Rounded avatar"
			/>
			<div class="flex flex-col ml-3">
				<h1 class="font-bold text-lg dark:text-gray-200">{author.name} {author.lastName}</h1>
				<span class="text-gray-300 dark:text-gray-400">{createdAt}</span>
			</div>
		</div>
		<div class="flex items-center justify-between">
			<a class="text-2xl mx-1 text-primary" href={author.facebook}>
				<Icon color="#3C4390" src={FaBrandsFacebookSquare} />
			</a>
			<a class="text-2xl mx-1 text-blue-400" href={author.twitter}>
				<Icon color="#1DA1F2" src={FaBrandsTwitterSquare} />
			</a>
			<a class="text-2xl mx-1 text-red-400" href={author.gmail}>
				<Icon color="red" src={FaBrandsGoogle} />
			</a>
			<a class="text-2xl mx-1 text-gray-900" href={author.website}>
				<Icon color="gray" src={FaSolidGlobe} />
			</a>
		</div>
	</div>
	<div class="mt-10">
		<h1 class="text-2xl font-bold dark:text-gray-300">{title}</h1>
		<div class="my-6 ">
			<img
				src={image}
				class="max-w-full h-auto rounded-lg"
				role="presentation"
				loading="lazy"
				alt={title}
			/>

			<p
				class="mt-4 dark:text-gray-100 first-letter:capitalize tracking-wider leading-relaxed first-letter:font-bold first-letter:text-4xl text-lg font-medium font-serif text-justify text-gray-700"
			>
				{content}
			</p>

			<div class="flex justify-between flex-wrap ">
				{#each data as item}
					<Card props={item} />
				{/each}
			</div>
		</div>
	</div>
</div>
