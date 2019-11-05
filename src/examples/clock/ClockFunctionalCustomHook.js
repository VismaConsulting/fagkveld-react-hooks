import React, { useEffect, useState } from 'react'

function useTimer(currentDate) {
    const [date, setDate] = useState(currentDate)

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(timerID)
        }
    })

    function tick() {
        setDate(new Date())
    }

    return date
}

export function ClockFunctionalCustomHook() {
    const date = useTimer(new Date())

    return <h1>Klokka er {date.toLocaleTimeString()}</h1>
}
