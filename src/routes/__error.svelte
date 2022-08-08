<script context="module">
	export const load = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script>
	// @ts-nocheck

	import ErrorScreen from '../components/screens/ErrorScreen.svelte';
	import NotFoundScreen from '../components/screens/NotFoundScreen.svelte';

	export let error, status;

	console.log(JSON.stringify(error));
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>
{#if status === 404}
	<NotFoundScreen />
{:else}
	<ErrorScreen error />
{/if}
