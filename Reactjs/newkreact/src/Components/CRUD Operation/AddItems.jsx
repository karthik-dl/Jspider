import axios from 'axios'
// import { Modal } from 'bootstrap'
import React, { useState } from 'react'
import Modal from "./Madol"

const AddItems = () => {

    let [formData,setFormData]= useState({name:"",price:"",color:"",brand:""})
    let [showModal,setShowModal] = useState(false)

    // !updating state with entered data from the UI
    let changeFormData=({target:{name,value}})=>{
        setFormData({...formData,[name]:value})
    }

    //!Submitting the formData
    let submitFormData=async(e)=>{
        e.preventDefault();

        let addItem = await axios.post("http://localhost:3000/items",formData)
        setShowModal(true)

        setTimeout(()=>{
            setShowModal(false)
        },3000)
    }
  return (
    <div>
        {showModal && <Modal data="Item Added successfully"/>}
    </div>
  )
}

export default AddItems