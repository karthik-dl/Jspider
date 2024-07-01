import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'

let initialState = {
    newProducts: [],
    isError: false,
    isLoading: true
}

let productReducer = (currentState, action) => {
    console.log(currentState)
    // eslint-disable-next-line default-case
    switch (action.type) {
        case "FETCH_SUCCESS": return { ...currentState, newProducts: action.payload, isLoading: false }

        case "FETCH_ERROR" : return {...currentState,isError:true,isLoading:false}
    }
}

const UseReducerHookApi = () => {
    let [products, productsDispatcher] = useReducer(productReducer, initialState)

    let getProducts = async () => {
        try {
            let { data } = await axios.get("https://fakestoreapi.com/products");
            productsDispatcher({ type: "FETCH_SUCCESS", payload: data })
        }
        catch (err) {
            productsDispatcher({type:"FETCH_ERROR"})
        }
    }

    useEffect(() => {
        getProducts()
    }, [])



    return (
        <div>
            <h1>{products.isLoading && "Loading..."}</h1>
            <h1 style={{color:"red"}}>{products.isError && "ERROR"}</h1>
            {}
            {products.newProducts?.map(({id,image,title,price,category,description})=>{
                return (
                    <div>
                        <img key={id} src={image} width="200px" height="200px" alt=""/>
                    <h1>{title}</h1>
                    <h1>{price}</h1>
                    <h1>{category}</h1>
                    <h1>{description}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default UseReducerHookApi