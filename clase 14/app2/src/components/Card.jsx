import React from 'react'

const Card = ({children}) => {
  return (
    <div className='list__group'>
        {/* <h2>{titulo}</h2>
        <img src={img} alt="" /> */}
        {children}
    </div>
  )
}
// BEM
export default Card