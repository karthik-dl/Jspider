import React, { useEffect, useState } from 'react'
import axios from "axios"
import Movie from "./FakeStoreApi.module.css"

const FakeStoreApi = () => {
    let [data, setData] = useState([])

    useEffect(() => {
        FakeApi()
    }, [])

    async function FakeApi() {
        try {
            let { data } = await axios.get("https://fakestoreapi.com/products")
            setData(data)
            console.log(data)
        }
        catch (err) {
            setData(err)
        }
    }

    return (
        <div>
        <div className={Movie.card}>
            {data.map(({ id, title, price, description, category, image, rating }) => {
                return (
                    <div className={Movie.Card1}>
                        <h2>{title}</h2>
                        <img src={image} alt="" />
                        <h6>Price:{price}$</h6>
                        <h6>Category:{category}</h6>
                        <h6>Rating :
                            <li>
                                Rate:{rating.rate}
                            </li>
                            <li>Count:{rating.count}</li>
                        </h6>
                        <h6>{description}</h6>
                    </div>
                    )
            })}
        </div>
        </div>
    )
}

export default FakeStoreApi