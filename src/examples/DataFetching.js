import React, { useEffect, useState } from 'react'
import Article from '../common/Article'

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

export function DataFetchingFunction1() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }) // []

    return (
        <div>
            {data.map(d => (
                <Article key={d.id} content={d} />
            ))}
        </div>
    )
}
