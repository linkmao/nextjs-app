"use client"
const Button = ()=>{
  return <button onClick={()=>{alert("Para que esta alerta funcionara, al ser ejecutado por un evento onClick, este componente Button, se ha marcado con use client")}}>Touch me!!</button>
}

export default Button