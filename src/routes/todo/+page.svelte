<script>
	export let data;
</script>

<div class="centered">
	<h1>todos</h1>

	<form method="POST" class="max-w-sm mx-auto">
		<div class="relative z-0 w-full mb-5 group">
		<label>
			add a todo:
			<input
			class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				name="description"
				autocomplete="off"
			/>
		</label>
		</div>
	</form>

	<ul class="todos">
		{#each data.todos as todo (todo.id)}
			<li>
				{todo.description}
			</li>
		{/each}
	</ul>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 50px auto;
		background: beige;
        padding: 20px;
		box-shadow: 0 0 20px rgba(0,0,0,1);
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
		background: url(./remove.svg) no-repeat 50% 50%;
		background-size: 1rem 1rem;
		cursor: pointer;
		height: 100%;
		aspect-ratio: 1;
		opacity: 0.5;
		transition: opacity 0.2s;
	}

	button:hover {
		opacity: 1;
	}

	.saving {
		opacity: 0.5;
	}
</style>
