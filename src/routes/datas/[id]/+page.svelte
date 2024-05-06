<script>
    export let data
</script>


<div class="posts">
    {#each data.posts as post}
        <div>
			<div style='position:absolute;right:10px; top:3px;font-size:0.75rem'>
				1
			</div>
			<div style='position:absolute;left:10px; top:3px;font-size:0.75rem'>
				2
			</div>
			{post.title}
		</div>
    {/each}
</div>

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
		position: relative;
		justify-content: normal;
        align-content: start;
		padding: 0.5rem;
		font-size: 1.5rem;
		color: rgb(73, 9, 9);
		border: 1px solid gray;
	}
</style>