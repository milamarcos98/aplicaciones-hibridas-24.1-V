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



// COMPONENTES

// function Button(props){
//   return(
//     <button>{props}</button>
//   )
// }

// export default Button




// Componentes de clase 
// class Button extendes React.Component{
//   constructor(props){
//     super(props)
//   }

//   render(){
//     return (
//       <button></button>
//     )
//   }
// }


// export default Button
