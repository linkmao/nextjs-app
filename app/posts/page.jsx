import PostCard from "../../components/PostCard"


const loadPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments')
  const data = await res.json()
  // console.log(data)
  return data
}


const PostComponet = async () => {
  const info = await loadPosts()
  //  console.log(info)
  return <>
    <h1>
      PUBLICACIONES FETCH
    </h1>
    {info.map((post) => (<PostCard post={post} key={post.id}/>))}
    </>
}

    export default PostComponet