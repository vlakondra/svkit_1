async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let ids = []
    let data = await response.json()

    data.forEach(e => {!(e.userId in ids)? ids.push(e.userId):false});
    console.log(ids)  
    
    return {posts:data,ids:[...new Set(ids)]}//response.json()
  }
  
  async function getImages(limit) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const images = await response.json()
    return images.slice(0, limit)
  }


  export async function load({params}) {
    //console.log('p',params)
    let tmp = await getPosts()
    return {
      posts: tmp.posts,
      users: tmp.ids,
      images: await getImages(10)
    }
  }