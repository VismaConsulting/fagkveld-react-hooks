import React, { useState } from 'react'

export function CounterFunctional() {
    const [count, setCount] = useState(0)

    const handleClick = () => setCount(prevCount => prevCount + 1)

    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}
