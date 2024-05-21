async function getUserPosts(userid) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userid}`)
    let ids = []

    let data = await response.json()
    data.forEach(e => { ids.push(e.id)});
    
    return ids
  }
  
  export async function load({params}) {
    let user_id = params.userid
    console.log('par', user_id)
    let tmp = await getUserPosts(user_id)
    return { userposts: tmp,
      userid: user_id

    }
  }