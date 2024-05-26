async function getPost(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     return response.json()
  }
  
  async function getComments(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
     return response.json()
  }

  export async function load({params,parent}) {
      let post = await getPost(params.postid)
      let comments =  await getComments(params.postid)
     console.log('par',params.postid, )
      return {
        params:params.postid,
        post:post,
        comments:comments,
        showcomments:false
      }
    }