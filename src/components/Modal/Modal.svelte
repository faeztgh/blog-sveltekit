<script>
	import { fade } from 'svelte/transition';
	export let author;
	export let isModalOpen;

	const handleCloseModal = () => {
		isModalOpen = false;
	};

	const { name, lastName, avatar, userName, bio } = author;
</script>

<!-- Backdrop -->

<div transition:fade class="fixed inset-0 bg-slate-900 bg-opacity-50 top-0 z-50 w-full h-full" />
<!-- Main modal -->
<div
	id="defaultModal"
	tabindex="-1"
	class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center flex"
	aria-modal="true"
	role="dialog"
	transition:fade
>
	<div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
		<!-- Modal content -->
		<div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
			<!-- Modal header -->
			<div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
				<h3 class="text-xl font-semibold text-gray-900 dark:text-white">
					<div class="flex items-center">
						<img class="w-14 h-14 rounded-full" src={avatar} alt="avatar" />
						<div class="flex flex-col ml-3">
							<h1 class="font-bold text-lg">{name} {lastName}</h1>
							<span class="text-gray-300 text-sm">@{userName}</span>
						</div>
					</div>
				</h3>
				<button
					on:click={handleCloseModal}
					type="button"
					class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
					data-modal-toggle="defaultModal"
				>
					<svg
						aria-hidden="true"
						class="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
					<span class="sr-only">Close modal</span>
				</button>
			</div>
			<!-- Modal body -->
			<div class="p-6 space-y-6">
				<p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
					{bio}
				</p>
			</div>
		</div>
	</div>
</div>
