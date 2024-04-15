import { fail } from '@sveltejs/kit';
import * as db from '$lib/datas/tododata.js';

import * as fs from 'fs'
import { Buffer } from 'buffer';



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
	create: async ({ cookies, request }) => {
		const data = await request.formData();

		let offile = data.get("file")
		let img64 =  data .get("img")
		let finish = data.get('finish')

        console.log("offile-",finish, offile, offile.name,img64)



		// db.createTodo(cookies.get('userid'), data.get('description'));

		try {
			db.createTodo(cookies.get('userid'), data.get('description'),finish);


			if (offile) {
				const filedata = new Uint8Array(Buffer.from(await offile.arrayBuffer()));

				const buff=`data:image/png;base64,${Buffer.from(filedata).toString('base64')}`;
                fs.writeFileSync('static/img.png', buff);    


				fs.writeFile(`static/${offile.name}`, filedata, (err) => {
					if (err) {
						return fail(500, { error: err.message });
					}
					console.log('Файл сохранен');
				});
			}
	


		} catch (error) {
			return fail(422, {
				description: data.get('description'),
				error: error.message
			});
		}
	},

	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deleteTodo(cookies.get('userid'), data.get('id'));
	}
};
