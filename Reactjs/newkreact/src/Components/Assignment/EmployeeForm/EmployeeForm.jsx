/* eslint-disable no-undef */
import React, { useState } from 'react'
import empstyle from "./Employee.module.css"

const EmployeeForm = () => {
    let [employee, setEmployee] = useState({ empName: "", empMob: "", empEmail: "", empRole: "" })
    let [employee1, setEmployee1] = useState([{ empName: "", empMob: "", empEmail: "", empRole: "" }])
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = ([])

    let updateValue = ({ target: { value, name } }) => {

        setEmployee({ ...employee, [name]: value })

    }

    let submitFormData = (e) => {
        e.preventDefault()
        setEmployee1([...employee1, employee])
    }
    // console.log(employee1)

    let handleSearch = (e) => {
       setSearch(e.target.value)


    }
    const filteredPeople = employee1.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

    // function debounce(func, timeout = 2000) {
    //     let timer;
    //     return () => {
    //         clearTimeout(timer);
    //         timer = setTimeout(() => {

    //             console.log(func)
    //         }, timeout);
    //     };
    // }
    // function fetchResults(value) {
    //     console.log("Fetching input suggestions", value);
    // }
    // const processChange = debounce(fetchResults, 3000);\

    // let viewResults=()=>{
    //     if(search.trim() == "")
    //     {
    //         alert("field cannot be empty")
    //     }
    //     else{
    //         const filteredResults=storeData.filter((details)=>{
    //             return details.empName.toLowerCase().includes(search.toLowerCase())
    //         })
    //         setSearchResults(filteredResults)
    //     }
    // }

    return (
        <div className={empstyle.container}>
            <div className={empstyle.searchBar}>
                <input type="text" placeholder='Search  the employee' onChange={handleSearch} />
                <ul>
                    {filteredPeople.map((person,index)=>(
<li key={index}>
    {person.empName}
</li>
                    ))}
                </ul>

                {/* <button onClick={viewResults}>Search</button> */}
                <button onClick={handleSearch}>Search</button>
            </div>
            {searchResults && searchResults.map((data, index) => {
                return (
                    <div key={index}>
                        <h2>Name:{data.empName}</h2>
                        <h2>Mobile No:{data.empMob}</h2>
                        <h2>Email:{data.empEmail}</h2>
                        <h2>Role:{data.empRole}</h2>
                    </div>
                )
            })}
            <div>
                <div className={empstyle.formData_div}>
                    <form className={empstyle.form} onSubmit={submitFormData}>
                        <div className={empstyle.input_div}>
                            <input type="text" placeholder='Enter the Name' name="empName" onChange={(e) => updateValue(e)} />
                        </div>
                        <div className={empstyle.input_div}>
                            <input type="tel" placeholder='Enter the Mobile number' name="empMob" onChange={(e) => updateValue(e)} />
                        </div>
                        <div className={empstyle.input_div}>
                            <input type="email" placeholder='Enter the mail' name="empEmail" onChange={(e) => updateValue(e)} />
                        </div>
                        <div className={empstyle.input_div}>
                            <input type="text" placeholder='Enter the Role' name="empRole" onChange={(e) => updateValue(e)} />
                        </div>
                        <div className={empstyle.input_div}>
                            <button type='submit'>Submit</button>
                        </div>

                    </form>
                    <div className={empstyle.data}>
                        {employee1.map((data, index) => {
                            return (
                                <div key={index}>
                                    <h1>Name:{data.empName}</h1>
                                    <h1>MObile:{data.empMob}</h1>
                                    <h1>Email:{data.empEmail}</h1>
                                    <h1>Role:{data.empRole}</h1>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EmployeeForm

