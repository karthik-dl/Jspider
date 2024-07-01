
import { useCounter } from './useCounter'
const Counting = () => {

    let {count,increment,decrement} =useCounter(2)
  return (
    <div>
        <h1>Count:{count}</h1>
        {/* <h1>Count:{count}</h1> */}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counting