<script>
	export let data;
	let current = data.users[0];

	const onlink_click = (userid) => {
		current = userid;
	};
</script>

<div class="layoutposts">
	<div class="posts">
		<slot />
	</div>

	<div class="users">
		{#each data.users as user}
			<p class:active={current === user}>
				<a href="/posts2/{user}" on:click={() => onlink_click(user)}>User {user}</a>
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
		width: 80%;
		border-right: 1px solid gray;
	}
	.users {
		width: 20%;
		text-align: center;
		margin-top: 25px;
	}
	.active {
		background-color: red;
		color: white;
	}
</style>
