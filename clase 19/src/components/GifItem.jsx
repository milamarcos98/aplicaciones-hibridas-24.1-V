import React from 'react'
import { Link } from 'react-router-dom'

export const GifItem = ({title, url, id}) => {
  return (
    <div>
        <img src={url} alt={title} />
        <p> {title} </p>
        <Link to={`/detail/${id}`}>Ver Gif</Link>
    </div>
  )
}
