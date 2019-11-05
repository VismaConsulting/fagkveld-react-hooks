import React from 'react'

export default function Article(props) {
    return (
        <article style={{ border: '1px solid' }}>
            <h1>{props.content.title}</h1>
            <p>{props.content.body}</p>
        </article>
    )
}
