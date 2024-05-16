async function getUserPosts(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  // let ids = []
  // let data = await response.json()

  // data.forEach(e => {!(e.userId in ids)? ids.push(e.userId):false});
  // console.log(ids)  
  
  // return {posts:data,ids:[...new Set(ids)]}//
  return response.json()
}

export async function load({params}) {
    console.log('p',params.userid)
    let posts = await getUserPosts(params.userid)
    // let tmp = await getPosts()
    console.log('posts',posts)
    return {
      params:params.userid,
      userposts:posts
    }
  }