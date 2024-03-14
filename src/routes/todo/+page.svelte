<script>
	export let data;
</script>

<div class="centered">
	<h1>todos</h1>

	<form method="POST" action="?/create" class="mx-auto max-w-sm">
		<div class="group relative z-0 mb-5 w-full">
			<label>
				add a todo:
				<input
					class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-xs text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
					name="description"
					autocomplete="off"
				/>
			</label>
		</div>
	</form>

	<div class="todos">
		{#each data.todos as todo (todo.id)}
			<!-- <li> -->
			<form method="POST" action="?/delete">
				<input type="hidden" name="id" value={todo.id} />
				<div style="display:flex;width:100%">
					<div style="flex:1">{todo.description}</div>

					<button aria-label="Mark as complete" />
				</div>
			</form>
			<!-- </li> -->
		{/each}
	</div>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 50px auto;
		background: beige;
		padding: 20px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 1);
		min-width: 33%;
	}

	label {
		width: 100%;
	}

	input {
		flex: 1;
	}

	span {
		flex: 1;
	}

	button {
		border: none;
		background: url('remove.svg') no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		width: 1rem;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 1.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style>
