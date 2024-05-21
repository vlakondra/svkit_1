async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     return response.json()
  }
  
  export async function load({params}) {
      let post = await getPost(params.postid)
      return {
        params:params.postid,
        post:post
      }
    }