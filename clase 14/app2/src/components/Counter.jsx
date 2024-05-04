import React, { useState } from 'react'

const Counter = () => {
    let conunter = 0;
    const [counter, setCounter] = useState({count: 0, value: "value"})

    const increase = () => {
        setCounter(prevState => {
            return {
                ...prevState, count: prevState.count + 1
            }
        });
    }

    const decrease = () => {
        setCounter(prevState => {
            return {
                ...prevState, count: prevState.count - 1
            }
        });
    }

    const reset = () => {
        setCounter({count: 0, value: "reset"})
    }

  return (
    <div>
        <h1>Contador</h1>
        <p>Count: {counter.count}</p>
        <p>Value: {counter.value}</p>
        <div>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    </div>
  )
}

export default Counter