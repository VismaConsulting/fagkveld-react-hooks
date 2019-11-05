import React, { useEffect, useState } from 'react'

export const useDataApi = (initialUrl, initialData) => {
    const [data, setData] = useState(initialData)
    const [url, setUrl] = useState(initialUrl)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            setIsLoading(true)

            try {
                const response = await fetch(url)
                const data = await response.json()
                setData(data)
            } catch (error) {
                setIsError(true)
            }

            setIsLoading(false)
        }

        if (url) {
            fetchData()
        }
    }, [url])

    return [{ data, isLoading, isError }, setUrl]
}
