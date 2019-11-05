import React from 'react'
import Article from '../../common/Article'

export class DataFetchingClass extends React.Component {
    state = {
        data: []
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState({ data: data }))
    }

    render() {
        return (
            <div>
                {this.state.data.map(d => (
                    <Article key={d.id} content={d} />
                ))}
            </div>
        )
    }
}
