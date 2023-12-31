import React from 'react';
import { Link } from "react-router-dom";

const Navbar= () =>{
    return (
        <div class="nav">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Projects">Projects</Link>
        </li>
        <li>
            <Link to="/ContactPage">Contact</Link>
        </li>
        </div>

    )
}

export default Navbar