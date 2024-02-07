<script>
    export let data;
    import { browser } from '$app/environment';
    import { goto } from '$app/navigation';


if (browser) {
    console.log('from page')
                goto('countries/sss');
            }
</script>

{JSON.stringify(data)}
<h1>Contries</h1>