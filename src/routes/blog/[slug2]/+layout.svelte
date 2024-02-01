<script>
	export let data;
</script>

<div class="layout bg-orange-200 p-8">
    {JSON.stringify(data)}
	<main>
		<slot />
	</main>
</div>

<style>
	@media (min-width: 640px) {
		.layout {
			display: grid;
			gap: 2em;
			grid-template-columns: 1fr 16em;
		}
	}
</style>
