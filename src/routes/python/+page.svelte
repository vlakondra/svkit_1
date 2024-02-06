<script>
	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<h1>Python</h1>
<div>
	<a href='/'>Home</a>
</div>

{#if data.result2}
<ul>
	{#each data.result2 as item}
		<li>{item[0]} -- {item[1]}</li>
	{/each}
</ul>
{/if}