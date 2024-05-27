import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'
import PacmanLoader from "react-spinners/PacmanLoader"

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs("search",category)
    console.log(images)
  return (
    <div>

        {
            isLoading && (
                <PacmanLoader color="rgba(224, 174, 45, 1)" />)
        }

        <h3> {category} </h3>


        <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem key={image.id} id={image.id} title={image.title} url={image.images.original.url} />
                ))
            }
        </div>
    </div>
  )
}
