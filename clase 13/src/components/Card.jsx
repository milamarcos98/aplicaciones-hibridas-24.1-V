import React from 'react'

const Card = ({children}) => {
  return (
    <div className='card'>
        {/* <h2>{titulo}</h2>
        <img src={img} alt="" /> */}
        {children}
    </div>
  )
}

export default Card