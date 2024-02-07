export function load({params}) {
	console.log("+page.server.js",params)
	return {
       "testdata22": {a:[4,25,77]}
		// summaries: posts.map((post) => ({
		// 	slug: post.slug,
		// 	title: post.title
		// }))
	};
}
