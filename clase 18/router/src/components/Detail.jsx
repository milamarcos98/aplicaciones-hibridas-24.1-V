import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    console.log(useParams())
    const {name} = useParams()
  return (
    <div>
        <h1>Detail</h1>
        <h2>User: {name}</h2>
    </div>
  )
}

export {Detail}