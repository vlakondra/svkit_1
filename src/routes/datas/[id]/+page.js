async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json()
  }
  
  async function getImages(limit) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const images = await response.json()
    return images.slice(0, limit)
  }


  export async function load({params}) {
    console.log('p',params)
    return {
      posts: await getPosts(),
      images: await getImages(10)
    }
  }