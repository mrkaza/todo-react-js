import React from 'react';
import Register from '../modules/auth/components/Register'
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Auth = () => {
    const auth = useSelector(state=> state.firebase.auth);

    if(auth.uid) return <Redirect to="/" />

    return (
        <Register />
    )
}

export default Auth;