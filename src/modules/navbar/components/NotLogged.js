import React from 'react';
import {NavLink} from 'react-router-dom';

const LoggedOut = () => {
    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
        </ul>
    )
}

export default LoggedOut;