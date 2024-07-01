import React, { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = (url) => {
    let [apiData, setApiData] = useState([])
    let [isLoading, setIsLoading] = useState(false)
    let [isError, setIsError] = useState(false)

    let getStoreData = async () => {
        try {
            let { data } = await axios.get(url)
            setApiData(data)
            setIsLoading(false)
            setIsError(false)
        }
        catch (err) {
            setApiData(err)
            setIsLoading(false)
            setIsError(true)
        }
    }

    useEffect(() => {
        setIsLoading(true)
        getStoreData()
    }, [])

    return { apiData, isLoading, isError }
}
export { useFetch } 