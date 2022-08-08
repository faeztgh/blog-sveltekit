<script lang="ts">
	import '../app.css';

	import Footer from '../components/Footer/Footer.svelte';
	import Navbar from '../components/Navbar/Navbar.svelte';
	import Sidebar from '../components/Sidebar/Sidebar.svelte';
	let theme = 'dark';
</script>

<div class="{theme}">

	<Navbar bind:theme={theme}/>
	
	<main
	class="min-h-screen dark:bg-primary relative flex xl:px-56 lg:px-44 md:px-32 sm:px-20 flex-col sm:flex-row "
	>
	<Sidebar />
	<div class="w-3/4 px-14 py-14">
		<slot />
	</div>
</main>

<Footer />
</div>
