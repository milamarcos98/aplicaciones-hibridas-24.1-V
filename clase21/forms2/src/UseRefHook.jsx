import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const inputRef = useRef(null)
    // const [count, setCount] = useState(0)
    // const countRef = useRef(0);
    // const handleIncrement = () => {
    //     // setCount(count + 1)
    //     countRef.current++;

    //     // console.log("state:", count)
    //     console.log("ref:", countRef.current)
    // }
    // console.log(inputRef.current)

    useEffect(() => {
        inputRef.current?.focus();
    }, [])
  return (
    <div>
        {/* Count: {count}
        <button onClick={handleIncrement}>+</button> */}
        <input ref={inputRef} type="text" placeholder='write here...' />
        <input type="text" placeholder='write here...' />
    </div>
  )
}

export default UseRefHook