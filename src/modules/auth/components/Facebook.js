import React from 'react';
import {useDispatch} from 'react-redux';
import {facebook} from '../actions/authActions';

const Facebook = () => {
    const dispatch = useDispatch();

    const facebookLogin = () => {
        dispatch(facebook())
    }
    return (
        <button onClick={facebookLogin} className="btn blue darken-3">
            Login with Facebook
        </button>
    )
}

export default Facebook