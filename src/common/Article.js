import React from 'react'
import './Article.css'

export default function Article({ content }) {
    return (
        <article className="Article">
            <h1>{content.title}</h1>
            <p>{content.body}</p>
        </article>
    )
}
