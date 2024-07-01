// import React, { useEffect, useState } from 'react'
// import  axios from 'axios';
import Loader from './../../useEffect/ApiFecthing/Loader';
import { useFetch } from './useFetch';

const ApiFetch = () => {
    let {apiData,isLoading,isError} =useFetch("https://fakestoreapi.com/products")
   

    return (
        <div>
            <h1>{isLoading && <Loader/>}</h1>
            <h1>{isError && Error}</h1>
            {apiData.map(({ id, title, price, description, category, image, rating }) => {
                return (
                    <>
                        <h1>ID:{id}</h1>
                        <h1>Title:{title}</h1>
                        <h1>price:{price}</h1>
                        <h1>description:{description}</h1>
                        <h1>category:{category}</h1>
                        <h1>Image:<img src={image} alt="" height={"200px"} /></h1>
                        <h1>Ratings:<li>
                            <ul>Rate:{rating.rate}</ul>
                            <ul>Count:{rating.count}</ul>
                        </li>
                        </h1>

                    </>)
            })}
        </div>
    )
}

export default ApiFetch