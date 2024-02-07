import { posts } from '$lib/datas/data.js';

export function load() {
	return {
       "testdata": posts[0]
		// summaries: posts.map((post) => ({
		// 	slug: post.slug,
		// 	title: post.title
		// }))
	};
}