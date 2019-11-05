import React from 'react'
import Article from '../common/Article'
import { useDataApi } from './useDataApi'

export function DataFetchingCustomHook() {
    const [state, setUrl] = useDataApi('', [])

    return (
        <div>
            <button
                onClick={() =>
                    setUrl('https://jsonplaceholder.typicode.com/posts')
                }
            >
                Hent
            </button>
            {state.isLoading ? (
                <div>Laster...</div>
            ) : state.isError ? (
                <div>En feil oppstod</div>
            ) : (
                state.data.map(d => <Article key={d.id} content={d} />)
            )}
        </div>
    )
}
