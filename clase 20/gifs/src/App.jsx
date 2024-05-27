import { useState } from 'react'
import './App.css'
import { AddCategory, GifGrid, Home, Detail, Random} from './components'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/detail/:id' element={<Detail/>} />
      <Route path='/random' element={<Random/>} />
    </Routes>
    </>
  )
}

export default App

























// fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })


// fetch('https://rickandmortyapi.com/api/character')
// .then(respuesta => respuesta.json())
// .then(data => console.log(data))
// .catch(error => console.log("error: " + error.message))

// axios.get('https://rickandmortyapi.com/api/character')
// .then(respuesta => console.log(respuesta.data.results))
// .catch(error => console.log("error: " + error.message))