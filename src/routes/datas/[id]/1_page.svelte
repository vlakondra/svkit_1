<script>
	async function getPosts() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		return response.json();
	}

	let posts = getPosts();
</script>

{#await posts}
	<p>Loading...</p>
{:then posts}
		<div class="posts">
			{#each posts as post}
				<div>{post.title}</div>
			{/each}
		</div>
{/await}

<style>
	.posts {
		width: 75%;
		display: grid;

		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		grid-gap: 8px;
		padding: 15px 10px;
		margin: 20px auto;
		background-color: rgb(213, 209, 190);
	}

	.posts > * {
		display: grid;
		justify-content: normal;
        align-content: start;
		padding: 0.5rem;
		font-size: 1.5rem;
		color: rgb(73, 9, 9);
		border: 1px solid gray;
	}
</style>