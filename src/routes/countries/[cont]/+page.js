export function load(ctx) {
	console.log("+page.js",ctx)
	return {
       "testdata2": {a:[1,2,3]}
		// summaries: posts.map((post) => ({
		// 	slug: post.slug,
		// 	title: post.title
		// }))
	};
}