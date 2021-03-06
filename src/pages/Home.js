import React from 'react';
import Todo from '../modules/todo/Index';
import {useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';

const Index = () => {
    const auth = useSelector(state=> state.firebase.auth);

    if(!auth.uid) return <Redirect to="/login" />
    return (<Todo/>)
}

export default Index;