import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {signOut} from '../../auth/actions/authActions';


const LoggedIn = () => {

    const dispatch = useDispatch();
    
    const logout = () => {
        dispatch(signOut());
    }
    return (
        <ul id="nav-mobile" className="right">
            <li><NavLink to="/">Home</NavLink></li>
            <li><a onClick={logout}>Logout</a></li>
        </ul>
    )
}

export default LoggedIn;