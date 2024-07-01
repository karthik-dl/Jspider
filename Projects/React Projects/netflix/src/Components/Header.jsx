import React from 'react'
import HeaderStyle from "./Header.module.css"
import Button from './Button';

const Header = () => {
  return (
    <div>
        <div className={HeaderStyle.topNav}>
            <div className={HeaderStyle.logo}>
                <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
            </div>
            <div className={HeaderStyle.navBar}>
                <form>
                    <select>
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Kannada</option>
                        <option>Telugu</option>
                    </select>
                    <Button/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Header
// const Header = () => {
//     const navigate = useNavigate();

//     const clickHandler = (e) => {
//       e.preventDefault();
//       navigate('/login');
//     }
//   return (
//     <div> 
//       <header className="topNav">
//         <nav className="navbar navbar-expand-md navbar-dark">
//           <div className="container-fluid">
//             <Link className="navbar-brand" to="/">
//               <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
//             </Link>
            
//             <div className="navbar">
//               <form className="d-flex" role="search">
//                 <select>
//                   <option>English</option>
//                   <option>Hindi</option>
//                 </select>
//                 <button className="btn btn-danger" onClick={clickHandler}>Signin</button>
//               </form>
//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   )
// }

// export default Header