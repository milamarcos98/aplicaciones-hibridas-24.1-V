import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchGifs } from '../hooks/useFetchGifs';
import PacmanLoader from "react-spinners/PacmanLoader"

export const Detail = () => {
    const {id} = useParams();

    const {images, isLoading} = useFetchGifs("id", id);
  return (
    <div>
        {
            isLoading && (
                <PacmanLoader color="rgba(224, 174, 45, 1)" />)
        }
        {
            !isLoading && <div>
                <img src={images.images.original.url} alt={images.title} />
                <p> {images.title} </p>
                </div>
        }
    </div>
  )
}
