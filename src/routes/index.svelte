<script lang="ts">
	import Card from '../components/Card/Card.svelte';
	import { data } from '../data/data';
</script>
<svelte:head>
	<title>Home</title>
</svelte:head>
<div class="flex justify-between flex-wrap ">
	{#each data as item}
		<Card props={item} />
	{/each}
</div>
