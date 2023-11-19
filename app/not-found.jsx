import Link from "next/link"

const NotFound = ()=>{
return <div>
<h1>404</h1>
<p>Página no encontrada</p>
<Link href="/">Volver</Link>
</div>
}

export default NotFound