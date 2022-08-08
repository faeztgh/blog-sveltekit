<script>
	import { slide } from 'svelte/transition';
	import FaSolidCookieBite from 'svelte-icons-pack/fa/FaSolidCookieBite';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import FaCheckCircle from 'svelte-icons-pack/fa/FaCheckCircle';
	import FaTimesCircle from 'svelte-icons-pack/fa/FaTimesCircle';
</script>

<div transition:slide class="fixed inset-0 bg-slate-900 bg-opacity-50 top-0 z-40 w-full h-full" />

<div
	id="alert-additional-content-1 "
	class="px-4 py-8 absolute left-1/4 bottom-40 z-50  mb-4 border border-blue-300 rounded-lg bg-blue-50 dark:bg-blue-300"
	role="alert"
>
	<div class="flex mb-5 items-center">
		<Icon color="blue" size="30px" src={FaSolidCookieBite} />

		<h3 class="text-lg ml-3 font-medium text-blue-900">Our Site Use Cookies</h3>
	</div>
	<div class="mt-2 mb-4 text-lg text-blue-900">
		For better user experience, we use cookies to store your preferences and other information. By
		continuing to use our site, you are agreeing to our use of cookies.
	</div>
	<div class="flex">
		<button
			type="button"
			class="text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-blue-800 dark:hover:bg-blue-900"
		>
			<Icon color="white" size="15px" src={FaCheckCircle} />
			<span class="ml-2" />
			Accept All
		</button>

		<button
			type="button"
			class="text-blue-900 bg-transparent border flex items-center border-blue-900 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:border-blue-800 dark:text-blue-800 dark:hover:text-white"
			data-dismiss-target="#alert-additional-content-1"
			aria-label="Close"
		>
			<Icon color="blue" size="15px" src={FaTimesCircle} />
			<span class="ml-2" />

			Reject All
		</button>
	</div>
</div>
