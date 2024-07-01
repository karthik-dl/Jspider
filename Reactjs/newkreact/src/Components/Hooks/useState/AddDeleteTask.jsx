import React, { useState } from 'react';
import AddDeleteStyle from "./AddDelete.module.css"
import swal from "sweetalert2"

const AddDeleteTask = () => {
    let [task, setTask] = useState("")
    let [tasks, setTasks] = useState([""])
    let [message, setMessage] = useState("")

    let changeTask = ({ target: { value } }) => {
        setTask(value)
    }

    let addTask = () => {
        setTasks([...tasks, task]);
        setTask("")
    }

    let deleteTask = (index = 2) => {
        alert("Deleted Successfully")
        swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Deleted successfully!',
            showConfirmButton: false,
            timer: 10000
        })
        setTimeout(() => {
            setMessage("");

        }, 10000)


        let remainingTasks = tasks.filter((t, i) => {
            return index !== i

        })
        setTasks(remainingTasks)
    }
    return (
        <section className={AddDeleteStyle.container}>
            <div className={AddDeleteStyle.addContent}>
                <input type="text" placeholder='Task' onChange={changeTask} value={task} />
                <button onClick={addTask}>Add</button>
            </div>

            <div className={AddDeleteStyle.deleteContent}>

                {tasks.map((t, i) => {
                    return (
                        <div key={i}>
                            <span>{t}</span>
                            <button onClick={() => {
                                deleteTask(i)
                            }}>Delete</button>
                        </div>
                    )

                })}
            </div>
        </section>

    )
}

export default AddDeleteTask