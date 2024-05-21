<script>
	export let data;
</script>

<div class="layoutuserposts">
	<div class="menu">
		{#each data.userposts as post}
			 <div>
				<a href='/posts2/{data.userid}/{post}'>Post {post} </a>
			 </div>
		{/each}
	</div>
	<div class='post'>
		<slot />
	</div>
</div>
	
    


<style>
	.layoutuserposts {
		display: flex;
		flex-direction: row;
		border: 1px solid gray;
		margin: 20px;
	}

	.post {
		width: 70%;

	}
	.menu {
		width: 30%;
		text-align: center;
    margin-top: 0%;
	}

</style>
