// import React from "react";
// import Footer from "./Footer";

// const App = () => {
//   return React.createElement(
//  //  "h1",
//     // {id:"div1"},
//     // React.createElement("button",{id:"btn",style:{color:"blue",height:"70px",width:"200px"}},"Click"),+
//     // React.createElement("section",{id:"section"},
//     // React.createElement("h1",{id:"h1",style:{color:"blue"}},"Hii Karthik")))
//     "div",
//     { id: "div1" },
//     React.createElement(
//       "section",
//       {
//         id: "section",
//         style: {
//           border: "3px solid green",
//           backgroundColor: "black",
//           color: "white",
//           width: "400px",
//           height: "250px",
//           textAlign: "center",
//           paddingTop: "5px",
//           paddingBottom: "5px",
//         },
//       },
//       React.createElement(
//         "h1",
//         { id: "h1", style: { color: "red" } },
//         "Name:Karthik DL"
//       ),
//       React.createElement(
//         "h1",
//         { id: "h2", style: { color: "blue" } },
//         "id:123"
//       ),
//       React.createElement(
//         "h1",
//         { id: "h3", style: { color: "blue" } },
//         "Salary:20000k"
//       ),
//       React.createElement(
//         "h1",
//         { id: "h4", style: { color: "blue" } },
//         "Company:IBM"
//       ),
//       React.createElement(
//         "h1",
//         { id: "h5", style: { color: "blue" } },
//         "Address:Bangalore"
//       )
//     ),
//     React.createElement(
//       "div",
//       { id: "div2" },
//       React.createElement(
//         "nav",
//         {
//           id: "nav",
//           style: { display: "flex", color: "black", justifyContent:"space-Between" },
//         },
//         React.createElement("a", { href: "#" }, "submit"),
//         React.createElement("a", { href: "#" }, "Signin"),
//         React.createElement("a", { href: "#" }, "about"),
//         React.createElement("a", { href: "#" }, "contact")
//       )
//     )
//   );
// };
// .................

// const App = () => {
// return <section>
//   <div>
//     <h1>Name:Karthik</h1>
//     <h2>Id:123</h2>
//     <button>Click</button>
//   </div>
//   <Footer/>
// </section>
// };


// export default App;
// .............


// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>App</div>
//     )
//   }
// }
// ...............................

// import React from 'react';
// import Navbar from './Navbar';
// import Table from './Table';
// import Hook from "./Hook";
// import PRODUCT from "./product.json";

// export default function App() {
//   return (
//     // <div><Table/></div>
//     <div><Task/></div>
//   )
// }

// ..............
// import React from 'react'
// // import Eventhandling from './Eventhandling'
// // import Conditionalrendering from './Conditionalrendering'
// import Parent from './Day15/Parent'
// // import Task from "./Tablej.jsx";
// // import Cfc from "./Cfc";
// // import Props from "./Props";
// // import ParentComponent from './Parent'


// const App = () => {
//   return (
//     // <div><Task/></div>
//   <div><Parent/></div>
//   )
// }

// export default App
// .............................

// import React from 'react'
// import Reactrouts from './reactroutes/Reactrouts'
// import Apifetching from './Apifetching'
// import UseCallback from './UseCallback/UseCallback'
// import ChildF from './ReactFragments/ChildF'
// import Childprops from './Childprops'
// import Footer from './Components/Footer/Footer'
// import Child from './useRef/Child'
// import Flag from './Day15/Flag'

// const App = () => {
//   return (
//     <div><Apifetching/></div>
//   )
// }

// export default App


// ?..............................

import React from 'react'
import Button from './Button'
// import Responsivecarosoul from './Countdown/Responsivecarosoul'
// import Countdown from './Countdown/Countdown'
// import Apifetching from './Apifetching'
// import ClickImagemoving from './Countdown/ClickImagemoving';

const App = () => {
  return (
    <div>
      {/* <Responsivecarosoul/> */}
      <Button/>
    </div>
  )
}

export default App
