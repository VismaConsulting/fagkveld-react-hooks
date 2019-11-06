import React, { useEffect, useState } from 'react'
import Article from '../../common/Article'

export function DataFetchingFunctional() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    return (
        <div>
            {data.map(d => (
                <Article key={d.id} content={d} />
            ))}
        </div>
    )
}
