import React from 'react'

export class CounterClassFieldClass extends React.Component {
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
