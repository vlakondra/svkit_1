<script>
	export let data;
</script>

<p>POSTS</p>

<!-- <p>{JSON.stringify(data)}</p> -->
<div class="layoutposts">
	<div class="posts">
		<slot />
	</div>

	<div class="users">
		{#each data.users as user}

			<p>
			  <a href='/posts/{user}'>{user}</a>
		    </p>
		{/each}
	</div>
</div>

<style>
	.layoutposts {
		display: flex;
		flex-direction: row;
		border: 1px solid gray;
		margin: 20px;
	}
	.posts {
		width: 75%;
		border: 1px solid gray;
	}
	.users {
		width: 25%;
		border: 1px solid gray;
	}
</style>
