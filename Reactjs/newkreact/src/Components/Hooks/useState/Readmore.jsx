import React from 'react'
import { useState } from 'react'

let s = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nostrum placeat dicta ex provident sed nihil repellat blanditiis dignissimos quia corrupti, pariatur sequi iste eum nobis, eos, animi ab eligendi!
    Repudiandae, eligendi! Quo, dolor iusto incidunt ea eveniet atque dignissimos laborum iste tempora cupiditate, officia dolore adipisci delectus inventore. Maiores repellendus illum fugit modi, iusto culpa labore deleniti numquam hic!
    Minima, sed! Nesciunt iusto libero saepe, blanditiis laudantium eius nam ut voluptatum impedit sed suscipit reprehenderit provident eveniet rerum, alias porro repudiandae, quod amet. Modi accusamus aperiam ducimus eaque laudantium!
    Perspiciatis laboriosam possimus culpa odio. Autem expedita perferendis voluptatibus dignissimos ex omnis impedit molestias sequi totam provident blanditiis, corporis velit cum cupiditate nisi temporibus tenetur cumque. Sint a dicta eaque.`

const Readmore = () => {
    let [isbool, setIsbool] = useState(true)


    let ToggleText = () => {
        setIsbool(!isbool);
    }

    return (
        <div>
            {s}
            {isbool ? s.slice(0, 50) : s}
            <br/>
            <button onClick={ToggleText}>{isbool ? "Readmore" : "Readless"}</button>
        </div>
    )
}

export default Readmore