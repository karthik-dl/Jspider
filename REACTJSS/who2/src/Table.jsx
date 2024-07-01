import React, { Component } from 'react'
import Product from "./product.json"
import "./Global.css"
export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state={
            Employee : Product
        }
    }
  render() {
    return (
        <section>
            <article>
                <table>
                    <thead>
                        <tr>
                            <th>EName</th>
                            <th>Emp_id</th>
                            <th>Company</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Employee.map((e)=>{
                            console.log(e);
                            return (
                                <>
                                <tr>
                                    <td>{e.name}</td>
                                    <td>{e.id}</td>
                                    <td>{e.Company}</td>
                                    <td>{e.Salary}</td>
                                </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
            </article>
        </section>
    )
  }
}
