import React, { useState } from 'react'

export function CounterFunctionalShort() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
