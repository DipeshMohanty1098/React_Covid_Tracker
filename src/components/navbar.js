import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return (
        <nav>
        <div className="nav-wrapper grey darken-4">
            <div className="left">
            <a className="brand-logo">Covid-19 Tracker India</a>
            </div>
            <ul className="right">
                <li><Link to="/" className="waves-effect wave-light ">Home</Link></li>
                <li><Link to="/all_states" className="waves-effect wave-light ">State Numbers</Link></li>
            </ul>
        </div>
        </nav>

    )
}

export default Navbar;