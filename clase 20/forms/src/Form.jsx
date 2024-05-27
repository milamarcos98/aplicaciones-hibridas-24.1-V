import { useState } from 'react'
import './App.css'

function Form() {
  const [search, setSearch] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const errorMessage = validate(email, password);
  return (
    <>
     <form>
      {/* <input type="text" name='search' autoComplete='off' value={search} onChange={e => setSearch(e.target.value)} />
      <p>{search}</p> */}
      <input type="text" name='email' autoComplete='off' value={email} onChange={e => setEmail(e.target.value)} />
      <input type="text" name='password' autoComplete='off' value={password} onChange={e => setPassword(e.target.value)} />
      <p>{errorMessage} </p>
     </form>
    </>
  )
}

export default Form


const validate = (email, password) => {
  if(!email.includes('@')) return 'Email incorrecto';
  if(password.length < 4) return 'Contraseña incorrecta!'
}