import authReducer from '../modules/auth/reducers/authReducer';
import todoReducer from '../modules/todo/reducers/todoReducer';
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    todo: todoReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;