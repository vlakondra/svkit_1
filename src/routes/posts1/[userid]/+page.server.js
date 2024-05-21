async function getUserPosts(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
   return response.json()
}

export async function load({params}) {
    let posts = await getUserPosts(params.userid)

    return {
      params:params.userid,
      userposts:posts
    }
  }