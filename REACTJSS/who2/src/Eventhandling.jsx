//& Event handling

// !Event handling in classBase component
//& passing constructor only
// import React, { Component } from 'react'

// export default class Eventhandling extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//         this.Increment = this.Increment.bind(this)
//     }
//     Increment() {
//         this.setState({ count: this.state.count + 1 })

//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.Increment}>Increment</button>
//             </div>
//         )
//     }
// }


// & 2nd ways to event handling in classBase component

// import React, { Component } from 'react'

// export default class Eventhandling extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }
//     Increment() {
//         this.setState({ count: this.state.count + 1 })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={() =>  this.Increment() }>Increment</button>
//             </div>
//         )
//     }
// }


// & 3rd  way of eventHandling in class base component---using arrow function
// import React, { Component } from 'react'

// export default class Eventhandling extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
//     Increment=()=>{
//         this.setState({ count: this.state.count+1})
//     }
//   render() {
//     return (
//       <div>

//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment}>Increment</button>
//       </div>
//     )
//   }
// }



//& 4th

// import React, { Component } from 'react'

// export default class Eventhandling extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count:0
//       }
//     }
//     Increment(){
//         this.setState({count:this.state.count+1})
//     }
//     Decrement(){
//         this.setState({count:this.state.count-1})
//     }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.Increment.bind(this)}>Increment</button>
//         <button onClick={this.Decrement.bind(this)}>Decrement</button>
//               </div>
//     )
//   }
// }

// !.==============================================================================================================

//& EventHandling in functional base component

import React from 'react'
import { useState } from 'react'

const Eventhandling = () => {
    let [state,setState]=useState(0)

    let Increment=()=>{
        setState(state+1)
    }

  return (
    <div>
        <h1>{state}</h1>
        <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default Eventhandling