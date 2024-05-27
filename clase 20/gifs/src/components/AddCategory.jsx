import React, {useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs'
import useDebounce from '../hooks/useDebounce'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setInputValue ] = useState('')
    const [autocomplete, setAutocomplete ] = useState([])

    const debouncedInputValue = useDebounce(inputValue, 2000)

    const getAutocomplete = async () => {
      let options = await getGifs("autocomplete", debouncedInputValue)
      setAutocomplete(options)
    }

    useEffect(() => {
      getAutocomplete()
      console.log("autocomplete", autocomplete)
    }, [debouncedInputValue])

    const handleClick = (suggestion) => {
      onAddCategory(suggestion)
      setAutocomplete([])
      setInputValue('')
    }

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 2) return;
        setInputValue('');
        onAddCategory(inputValue.trim())
    }
  return (
    <div className="autocontainer">
    <form onSubmit={onSubmit}>
        <input type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
         />
    </form>
    {
      autocomplete.length > 0 && (
        <ul className="autocomplete">
          {
            autocomplete.map((item) => (
              <li onClick={() => handleClick(item.name)} key={item.name} >{item.name} </li>
            ))
          }
        </ul>
      )
    }
    </div>
  )
}
