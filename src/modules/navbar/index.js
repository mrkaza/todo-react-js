import React from 'react';
import {Link} from 'react-router-dom';
import LoggedIn from './components/LoggedIn';
import LoggedOut from './components/NotLogged';
import {useSelector} from 'react-redux';

const Navbar = () => {

    const user = useSelector(state => state.firebase.auth.isEmpty)
    return (
        <nav>
            <div className="nav-wrapper container">
                <Link to="/" className="brand-logo">Todo App</Link>
                {user ? (
                    <LoggedOut />
                ) : (
                    <LoggedIn />
                )}
            </div>
        </nav>
    );
}

export default Navbar;