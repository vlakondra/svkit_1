async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
  }
  
  export async function load({params}) {
    console.log('p',params)
    return {
      posts: await getPosts()
    }
  }