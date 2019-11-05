import React, { useEffect, useState } from 'react'

export class ClockClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return <h1>Klokka er {this.state.date.toLocaleTimeString()}</h1>
    }
}

export function ClockFunction() {
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


/*
* Custom hook
* */
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

export function ClockFunction2() {
    const date = useTimer(new Date())

    return <h1>Klokka er {date.toLocaleTimeString()}</h1>
}
