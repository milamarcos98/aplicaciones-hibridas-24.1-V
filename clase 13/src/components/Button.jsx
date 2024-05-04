import React from 'react'

// const Button = ({color, onClick, style, text}) => {
//   return (
//     <button style={style} className={'btn btn-' + color} onClick={onClick}>
//         {text}
//     </button>
//   )
// }
const Button = ({color, onClick, style, text}) => {
    return (
      <button style={style} className={'btn btn-' + color} onClick={onClick}>
          {text}
      </button>
    )
  }


export default Button