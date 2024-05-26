<script>
	export let data;
	import { page } from '$app/stores';
	let showComm = false;
	const TriggerComment = () => {
		showComm = !showComm;
	};
</script>

<!-- {JSON.stringify(data.comments)} -->
<p>{data.post.body}</p>
<div>
	<button on:click={TriggerComment}>
		{#if !showComm}
			Показать
		{:else}
			Скрыть
		{/if}
	</button>
</div>
<div>
	{#if showComm}
		{#each data.comments as comm}
			<div>
				{comm.body}
			</div>
		{/each}
	{/if}
</div>
