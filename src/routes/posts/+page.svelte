<script>
    export let data
    import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

    if (browser) {
		goto(`posts/${data.users[0]}`);
	}

</script>
<h1>=page.svelte</h1>
{JSON.stringify(data.users)}