<script>
	import { page } from '$app/stores';
    	/** @type {import('./$types').PageData} */
	export let data;
	console.log('$page.params',$page.params)
	// export let par;
	// console.log('page data',par, data.world)
	// const result = words.filter((word) => word.length > 6);
	let countries = data.world.alldata.filter((country) =>country[1] == $page.params.cont) 
</script>


<p>+page.svelte -- continent     countries</p>
<div style="border:1px solid blue;padding:25px">
 <!-- {JSON.stringify(data.world.alldata[0][1])}  -->
	{#each data.world.alldata.filter((country) =>country[1] == $page.params.cont.toUpperCase()) as item}
		<p>{item}</p>
	{/each}
</div>

<div style="border:1px solid red;padding:20px">
	{JSON.stringify($page.params.cont.toUpperCase())}
    {JSON.stringify(data.world.alldata.filter((country) =>(country) =>country[1] == $page.params.cont.toUpperCase()))}
</div> 