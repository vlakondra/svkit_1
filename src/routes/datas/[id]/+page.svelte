<script>
    export let data
</script>


<div class="posts">
    {#each data.posts as post}
        <div>
			<div class='meta left' >
				{post.userId}
			</div>
			<div  class='meta right'>
				{post.id}
			</div>
			{post.title}
		</div>
    {/each}
</div>
<div class="posts">
{#each data.images as image}
		<a class="image" href={image.url}>
			<img src={image.thumbnailUrl} alt={image.title} />
		</a>
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
	

	& > * {
		display: grid;
		position: relative;
		justify-content: normal;
        align-content: start;
		padding: 0.65rem;
		font-size: 1.5rem;
		color: rgb(73, 9, 9);
		border: 1px solid gray;
	}
}
	.meta{
		background-color: blanchedalmond;
		position:absolute;
		
		top:3px;
		font-size:0.75rem
	}
	.left{
		left:10px; 
	}
	.right{
		right:10px; 
	}
</style>