"use client"
import Link from "next/link"

const PostCard = ({ post }) => {
  return <div>
    <Link href={`/posts/${post.id}`}><h3>{post.id}. {post.name}</h3></Link>
    <p>{post.body}</p>
    <button onClick={() => { alert('hello') }}>Push me</button>
  </div>
}

export default PostCard

