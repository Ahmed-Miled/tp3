import React, { useState } from 'react'
function Compteur(){
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Compteur : {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default Compteur