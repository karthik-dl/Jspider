import React, { useState } from 'react'
import { QData } from './QData'

const QestAndAns = ({ id, qst, ans }) => {
    let [question, setQuestion] = useState(false)

    const displayAnswer = () => {
        setQuestion(!question)
    }
    return (
        <div>
            {QData.map((data) => {
                return (
                    <>
                        <h1>{data.id} {data.qst}</h1>

                        {question ? <h1>{data.ans}</h1> : " "}
                        <button onClick={() => { displayAnswer() }}>{question ? "Hide" : "Show"}</button>

                    </>

                )
            })}

        </div>
    )
}

export default QestAndAns