import { posts } from '$lib/datas/data.js';

export function load() {
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title
		}))
	};
}

// import { error } from '@sveltejs/kit';
// import { posts } from '$lib/datas/data.js';

// export function load({ params }) {
// 	const post = posts.find((post) => post.slug === params.slug);
//     console.log(params)
// 	if (!post) 
//     {   console.log('err')
//         throw error(404);
//     }

// 	return {
// 		post
// 	};
// }
