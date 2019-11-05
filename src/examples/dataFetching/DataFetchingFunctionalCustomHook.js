import React from 'react'
import Article from '../../common/Article'

import { useDataApi } from './useDataApi'
// import { useDataApiWithReducer as useDataApi } from './useDataApiWithReducer'
// import { useDataApiWithReducerAndCancel as useDataApi } from './useDataApiWithReducerAndCancel'

export function DataFetchingFunctionalCustomHook() {
    const [{ data, isLoading, isError }, setUrl] = useDataApi('', [])

    return (
        <div>
            <button
                onClick={() =>
                    setUrl('https://jsonplaceholder.typicode.com/posts')
                }
            >
                Hent data
            </button>
            {isLoading ? (
                <div>Laster...</div>
            ) : isError ? (
                <div>En feil oppstod</div>
            ) : (
                data.map(d => <Article key={d.id} content={d} />)
            )}
        </div>
    )
}
