import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Modal from "./Madol"
import {useNavigate} from "react-router-dom"

const AllItems = () => {

    let [item, setItems] = useState([])
    let [showModel, setShowModel] = useState(false)

    let getItems = async () => {
        try {
            let { data } = await axios.get(`http://localhost:3000/items`);
            console.log(data)
            setItems(data)
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getItems()
    }, [])


    //!view items
    let navigateToItem=useNavigate()
    let viewItem=(pid)=>{
        navigateToItem(`/items/${pid}`)
    }

    //!Delete Item
    let deleteItem=async(pid)=>{

        setShowModel(true)
        try{
            await axios.delete(`http://localhost:3000/items/${pid}`)
            // window.location.reload()
            setTimeout(()=>{
                setShowModel(false)
            },3000);
            getItems()
        }
        catch(err)
        {
            console.log(err)
        }
    }

    //! update items
    let updateItem=(pid)=>{
        navigateToItem(`/updateItem/${pid}`)
    }
    return (
        <div>
            {showModel && <Modal data="Product delete Successfully" bgcolor="blue" textColor="red" />}
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>View</th>
                        <th>Delete</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {item.map(({ id, name, price }, index) => {
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{name}</td>
                                <td>{price}</td>
                                <td><button onClick={() => {
                                    viewItem(id)
                                }}>View</button></td>

                                <td><button onClick={() => {
                                    updateItem(id)
                                }}>Update</button></td>

                                <td><button onClick={() => {
                                    deleteItem(id)
                                }}>Delete</button></td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllItems