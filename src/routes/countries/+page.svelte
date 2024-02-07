<script>
     /** @type {import('./$types').LayoutServerLoad} */
    export let data;
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';


if (browser) {
    console.log('from page',data.world.regions)
    goto(`countries/${data.world.regions[0].toLowerCase()}`);
            }
</script>

<!-- {JSON.stringify(data.world)}
{JSON.stringify(data.world.alldata)} -->
<!-- {JSON.stringify(data.world.regions)} -->