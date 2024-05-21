<script>
    export let data
    import { browser } from '$app/environment';
	import { goto } from '$app/navigation';

    if (browser) {
        setTimeout(()=>goto(`posts1/${data.users[0]}`),1000)
	}
</script>
<p>Ждите!</p>