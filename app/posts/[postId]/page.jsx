import PostComponet from "../page"
import { Suspense } from "react"

const loadPost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
  const data = await res.json()
  // console.log(data)
  return data
}


const PostDetail = async ({ params }) => {
  // console.log(params)
  const post = await loadPost(params.postId)
  console.log(post)
  return <>
    <h1>
      Detalle del post {params.postId}
    </h1>
    <h3>{post.id}. {post.name}</h3>
    <h3>{post.email}</h3>
    <p>{post.body}</p>

    {/* El siguiente es un ejemplo donde se muestra como un componente que está en page.jsx puede ser usado como un compoente cualquiera */}

    <hr />
    <h2>Otras publicaciones</h2>
    <Suspense fallback={<div>Cargando.. otros componetes</div>}>
      <PostComponet />
    </Suspense>

    {/* Notese como se usa el componente PostComponent que está en page, ahora, acá se hace uso de un componnete de react llamado Suspense, que tiene como funcion hacer algo parecido a lo que se hace con loading, solo que en este caso es aplicable de manera individual a un componente */}
  </>
}
export default PostDetail

// Es importante tener en cuenta que acá el objeto principal que guarda info es paprops, el cual incluye a params y la información asociada por ejemplo a la url digitada 