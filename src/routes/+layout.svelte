<script>
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/Header.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Header />
{@render children()}

<style>
	:global body {
		background-image: url('/background.png');
		background-size: cover;
		background-attachment: fixed;
	}
</style>
