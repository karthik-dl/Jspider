import React, { useState } from 'react'
import style from "./Question.module.css"
let q1 = `Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.`
let q2 = `Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.`
let q3 = `Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis`
let q4 = `Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.`
let q5 = `Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in`
function Question() {
    let [isbool, setisbool] = useState(true)
    let textvlaue = () => {
        setisbool(!isbool)
    }
    let [firstquestion, setquestion] = useState(true)
    let text2 = () => {
        setquestion(!firstquestion)
    }
    let [secondQuestion, setSecondQuestion] = useState(true)
    let text3 = () => {
        setSecondQuestion(!secondQuestion)
    }
    let [thirdQuestion, setThirdQuestion] = useState(true)
    let text4 = () => {
        setThirdQuestion(!thirdQuestion)
    }
    let [fourthQuestion, setFourthQuestion] = useState(true)
    let text5 = () => {
        setFourthQuestion(!fourthQuestion)
    }
    return (
        <div className={style.main}>
            <div className={style.main1}>

                <div className={style.a2}>
                    <div className={style.flex}>
                        <h3>1. Non cnsectetur a erat nam at lectus urna duis? <span onClick={textvlaue}>{isbool ? <i class="fa fa-angle-down" aria-hisetSecondQuestionen="true"></i> : <i class="fa fa-angle-up" aria-hisetSecondQuestionen="true"></i>}</span></h3>
                    </div>{isbool ? q1.slice(0, 0) : q1}
                </div>

                <div className={style.a2}>
                    <div className={style.flex}>
                        <h3>2. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?<span onClick={text2}>{firstquestion ? <i class="fa fa-angle-down" aria-hisetSecondQuestionen="true"></i> : <i class="fa fa-angle-up" aria-hisetSecondQuestionen="true"></i>}</span></h3>
                    </div>  {firstquestion ? q2.slice(0, 0) : q2}
                </div>

                <div className={style.a2}>
                    <div className={style.flex}>
                        <h3>3 .Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?<span onClick={text3}>{secondQuestion ? <i class="fa fa-angle-down" aria-hisetSecondQuestionen="true"></i> : <i class="fa fa-angle-up" aria-hisetSecondQuestionen="true"></i>}</span></h3>
                    </div>  {secondQuestion ? q3.slice(0, 0) : q3}
                </div>

                <div className={style.a2}>
                    <div className={style.flex}>
                        <h3>4. Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?<span onClick={text4}>{thirdQuestion ? <i class="fa fa-angle-down" aria-hisetSecondQuestionen="true"></i> : <i class="fa fa-angle-up" aria-hisetSecondQuestionen="true"></i>}</span></h3>
                    </div>
                    {thirdQuestion ? q4.slice(0, 0) : q4}
                </div>

                <div className={style.a2}>
                    <div className={style.flex}>
                        <h3>5.Tempus quam pellentesque nec nam aliquam sem et tortor consequat?<span onClick={text5}>{fourthQuestion ? <i class="fa fa-angle-down" aria-hisetSecondQuestionen="true"></i> : <i class="fa fa-angle-up" aria-hisetSecondQuestionen="true"></i>}</span></h3>
                    </div>
                    {fourthQuestion ? q5.slice(0, 0) : q5}
                </div>
            </div>
        </div>
    )
}

export default Question