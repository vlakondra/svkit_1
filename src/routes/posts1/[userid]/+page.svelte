<script>
    export let data;
    import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Посты пользователя {$page.params.userid}</title>
</svelte:head>
<div class="posts">
    {#each data.userposts as post}
        <div>
			<div class='meta left' >
				{post.userId}
			</div>
			<div  class='meta right'>
				{post.id}
			</div>
			<div>
			  {post.title}
		    </div>
			<div>
				<a href='/posts1/{post.userId}/{post.id}'>Читать</a>
			</div>

		</div>
    {/each}
</div>

<style>
	.posts {
		 width: 95%; 
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
		padding: 0.75rem;
		font-size: 1.25rem;
		color: rgb(73, 9, 9);
		border: 1px solid gray;
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