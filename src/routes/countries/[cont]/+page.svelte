<script>
	import { page } from '$app/stores';
    	/** @type {import('./$types').PageData} */
	export let data;
</script>


<p>+page.svelte -- continent     countries</p>
<div style="border:1px solid blue;padding:25px">
{JSON.stringify($page.data)}
</div>
<div style="border:1px solid red;padding:20px">
    {JSON.stringify($page.params)}
    </div>