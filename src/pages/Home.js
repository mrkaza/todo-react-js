import React from 'react';
import Login from '../modules/auth/index';
import Todo from '../modules/todo/Index';
import {useSelector} from 'react-redux';

const Index = () => {
    const user = useSelector(state => state.firebase.auth.isEmpty);
    return user ? (<Login/>) : (<Todo/>)
}

export default Index;