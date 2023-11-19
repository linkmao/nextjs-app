import NavBar from "../components/NavBar"
import {Roboto}   from "next/font/google" // Se hace extracting de un tipo de letra
import './global.css'

export const metadata = {
  title: 'Mi ejemplo NEXTJS',
  description: 'Este es un ejemplo básico tomado de FAZT',
}

// Se debe ejecutar la funcion o componente de tipo de letra, con parametros de configuracion
const roboto =Roboto({
  weight:["300", "400"],
  style:["italic", "normal"],
  subsets:["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <NavBar/>
      {children}  
      </body>
    </html>
  )
}
