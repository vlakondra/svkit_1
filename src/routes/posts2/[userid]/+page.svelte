<script>
export let data
import { browser } from '$app/environment';
import { goto } from '$app/navigation';

if (browser) {
 goto(`/posts2/${data.userid}/${data.userposts[0]}`);
}
</script>


<div class="userposts">
  post body {`posts2/${data.userid}/${data.userposts[0]}`}
</div>

<style>
	
</style>