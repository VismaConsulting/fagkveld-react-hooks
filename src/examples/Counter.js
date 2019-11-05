import React, { useState } from 'react'

export class ClassCounter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    render() {
        return (
            <div>
                <p>Clicked {this.state.count} times</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export class ClassFieldCounter extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }))
    }

    render() {
        return (
            <div>
                <p>Clicked {this.state.count} times</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}

export function FunctionalCounter() {
    const [count, setCount] = useState(0)

    const handleClick = () => setCount(prevCount => prevCount + 1)

    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

export function ShortFunctionalCounter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}
