import { useState } from 'react'
import './App.css'
import FormInput from './FormInput'

function App() {

  const [values, setValues] = useState({
    username:"",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "username...",
      required: true,
      pattern: "^[A-Za-z0-9]{4,20}$",
      errorMessage: "Username debe tener entre 4 y 20 caracteres y sin caracteres especiales."
    },
    {
      id: 2,
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "pepe@pepe.com",
      required: true,
      pattern: "[a-zA-Z0-9_\.\+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+",
      errorMessage: "Debe ser un email valido."
    },
    {
      id: 3,
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "password",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      errorMessage: "Password debe tener entre 8 y 20 caracteres, al menos una letra, un numero y un caracter especial."
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      label: "Confirmar Password",
      placeholder: "password",
      required: true,
      pattern: values.password,
      errorMessage: "Los password son distintos."
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleOnChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }


  return (
    <>
     <form onSubmit={handleSubmit}>

      {
        inputs.map((input) => (
          <FormInput
          key={input.id}
          value={values[input.name]}
          handleOnChange={handleOnChange}
          {...input}
          />
        ))
      }

      <button>Submit</button>
     
     </form>
    </>
  )
}

export default App

