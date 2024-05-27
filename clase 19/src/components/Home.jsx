import { useState } from 'react'
import { GifGrid } from './GifGrid';
import { AddCategory } from './AddCategory';

export function Home() {

  // getGifs('One piece')
  
  const [categories, setCategories ] = useState(['One piece']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }
  
  return (
    <>
     <h1>Gifs App</h1>

     <AddCategory onAddCategory={(value) => onAddCategory(value)} />

     {
      categories.map((category, index) => (
        // <p key={index}>{category}</p>
        <GifGrid key={index} category={category} />
      ))
     }

    </>
  )
}


























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