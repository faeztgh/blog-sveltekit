<script>
	export let error;
	const { name, message } = error;
</script>

<svelte:head>
	<title>{name}</title>
</svelte:head>
<!-- component -->
<div class="w-full mx-auto self-center ">
	<div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
		<div
			class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
			id="headerTerminal"
		>
			<div
				class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
				id="closebtn"
			/>
			<div
				class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
				id="minbtn"
			/>
			<div
				class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3"
				id="maxbtn"
			/>
			<div class="mx-auto pr-16 py-5" id="terminaltitle">
				<p class="text-center text-base font-bold">{name}</p>
			</div>
		</div>
		<div class=" pt-1 h-auto px-5 text-green-200 font-mono text-lg bg-black" id="console">
			<br />
			<p class="pb-1 capitalize">{message}</p>
		</div>
	</div>
</div>
