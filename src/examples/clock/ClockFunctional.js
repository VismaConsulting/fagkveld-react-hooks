import React, { useEffect, useState } from 'react'

export function ClockFunctional() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(timerID)
        }
    })

    function tick() {
        setDate(new Date())
    }

    return <h1>Klokka er {date.toLocaleTimeString()}</h1>
}
