<script>
	export let data;
	import { page } from '$app/stores';
	
    export let test = $page.route// data.params;
	let showComm = data.showcomments;

    $: {
        testIsChanged($page.route);
    }

    function testIsChanged(newValue) {
		showComm = false;
        console.log('newvalue',newValue);
    }


	
	console.log("showcomm",showComm)
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
