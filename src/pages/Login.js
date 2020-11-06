import React from 'react';
import Login from '../modules/auth/index';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const SignIn = () => {
    const auth = useSelector(state=> state.firebase.auth);

    if(auth.uid) return <Redirect to="/" />
    return (
        <Login />
    )
}

export default SignIn