import React, { useState } from 'react';

const Hook = () => {
    let [state, setState] = useState([
        {
            Name: "cute boy",
            id: 420,
            company: "cute-boy-company",
            salary: 9000000
        },
        {
            Name: "Roy",
            id: 420,
            company: "Roy-boy-company",
            salary: 9000000
        },
        {
            Name: "Kohli",
            id: 420,
            company: "KOhli-boy-company",
            salary: 9000000
        }
    ])
    return (
        <section>
            <article>
                <div>
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>id</th>
                            <th>company</th>
                            <th>salary</th>
                        </thead>
                        <tbody>
                            {state.map((m) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{m.Name}</td>
                                            <td>{m.id}</td>
                                            <td>{m.company}</td>
                                            <td>{m.salary}</td>
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
export default Hook
