import React, { useState } from 'react';
import PRODUCT from "./Git.json";
import "./Global.css";
const Task = () => {
    let [state, setState] = useState({product:PRODUCT});
    return (
        <section>
            <article>
                <div>
                    <table>
                        <thead>
                            <th>Id</th>
                            <th>Maker</th>
                            <th>img</th>
                            <th>Url</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Ratings</th>
                        </thead>
                        <tbody>
                            
                            {state.product.map((m) => {
                                return (
                                    <>
                                        <tr>
                                           <td>{m.Id}</td>
                                           <td>{m.Maker}</td>
                                           <td><img src={m.img} alt={m.img} height={60}/></td>
                                           <td><a href={m.Url}>{m.Url}</a></td>
                                           <td>{m.Title}</td>
                                           <td>{m.Description}</td>
                                           <td>{m.Ratings}</td>
                                        </tr>
                                    </>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </article>
        </section>
    )
}
export default Task
