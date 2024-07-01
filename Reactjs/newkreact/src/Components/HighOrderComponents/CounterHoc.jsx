import React, { useState } from 'react'

const CounterHoc = (OriginalComponent, c) => {

    function NewComponent() {
        let [count, setCount] = useState(0)

        let incrementCounter = () => {
            setCount(count + c)
        }

        let decrementCounter = () => {
            setCount(count - c)
        }

        return
            <OriginalComponent count={count}
                incrementCounter={incrementCounter}
                decrementCounter={decrementCounter}
            />
    }


    return NewComponent

}

export default CounterHoc