import React from 'react'

export class CounterClass extends React.Component {
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
