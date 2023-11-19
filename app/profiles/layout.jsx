import Link from "next/link"
export const metadata ={
  title:"Perfil especifico",
  description:"Esta es una págia de perfiles"
}


const LayoutProfiles = ({ children }) => {
  return <>
    <ul>
      <li><Link href="/profiles/mauricio">Mauricio</Link></li>
      <li><Link href="/profiles/camila">Camila</Link></li>
      <li><Link href="/profiles/mariangel">Mariangel</Link></li>
    </ul>
    {children}
  </>
}

export default LayoutProfiles
