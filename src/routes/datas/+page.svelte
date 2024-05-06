<script>
    //https://joyofcode.xyz/using-sveltekit-endpoints
	async function getPosts() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts')
		return response.json()
	}

	let posts = getPosts()
</script>

{#await posts}
  <p>Loading...</p>
{:then posts}
<div class ="posts">
  <ul>
    {#each posts as post}
      <li>{post.title}</li>
    {/each}
  </ul>
</div>
{/await}


<style>
    	.posts {
		width: 100%;
		display: grid;
		grid-template-columns: repeat( minmax(200), 1fr);
		grid-gap: 18px;
        padding:10px 20px;
        background-color: cornsilk;
	}
</style>

