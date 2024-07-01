import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'


const Products = () => {
  return (
    <section>
          <h1>Products</h1>
          {/* <div style={{display:"flex",flexDirection:"column"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wsqWuj2wIKiH9Y_1qN8D_z1XfBOYvT2F6A&usqp=CAU" alt="nike"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kPdqlz2d4dYcKlnzHgxMSxn9dsk8IaUbhA&usqp=CAU" alt="tv"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH97t3jLANX9KjAJAXwFN-wBIUVGk22kG2bg&usqp=CAU" alt="laptop"/>
            </div> */}
          <NavBar navLinks={{key1:"Shoes",key2:"Laptop",key3:"Televisions"}}
            navPaths={{url1:"shoes",url2:"laptops",url3:"televisions"}}/>
            
            <div style={{border:"2px solid red",margin:"50px auto",width:"600px",textAlign:"center" ,padding:"10px"}}>
                <Outlet/>
            </div>

            <div style={{display:"flex",justifyContent:"space-evenly",height:'200px',width:"800px",border:"1px solid red",padding:"10px"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wsqWuj2wIKiH9Y_1qN8D_z1XfBOYvT2F6A&usqp=CAU" alt="nike"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8kPdqlz2d4dYcKlnzHgxMSxn9dsk8IaUbhA&usqp=CAU" alt="tv"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH97t3jLANX9KjAJAXwFN-wBIUVGk22kG2bg&usqp=CAU" alt="laptop"/>
            </div>
    </section>
  
  )
}

export default Products