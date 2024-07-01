import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home';
import Services from './Services';
import Career from './Career';
import Contact from './Contact';
import "./Routes.css"
import AboutUs from './AboutUs';

const Layout = () => {
  return (
    <section className="mainContainer">
        <div>
            <h1>Halcyonic</h1>
        </div>
        <div className="Links">
            <ul>

                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <Link to="/Services">Three column</Link>
                </li>
                <li>
                    <Link to="/Career">Two Column #1</Link>
                </li>
                <li>
                    <Link to="/Contact">Two column #2</Link>
                </li>
                <li>
                    <Link to="/AboutUs">One Column</Link>
                </li>

            </ul>
        </div>
    </section>
  )
}

export default Layout