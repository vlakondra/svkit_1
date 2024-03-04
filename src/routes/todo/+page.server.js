import * as db from '$lib/datas/tododata.js';

export function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	return {
		todos: db.getTodos(id)
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		console.log(data)
		db.createTodo(cookies.get('userid'), data.get('description'));
	}
};
