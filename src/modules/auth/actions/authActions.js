import {firebaseAuth} from '../../../consts/fbConfig';
import firebase from 'firebase/app'

export const login = (credentials) => {
    return (dispatch) => {
        firebaseAuth.signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch) => {

        firebaseAuth.signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const register = (newUser) => {
    return (dispatch) => {
        firebaseAuth.createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(() => {
            dispatch({type:'REGISTER_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'REGISTER_ERROR', err})
        })
    }
}


export const facebook = () => {
    return (dispatch) => {

        const provider = new firebase.auth.FacebookAuthProvider();
        firebaseAuth.signInWithPopup(provider).then(() => {
            dispatch({type:'FACEBOOK_LOGIN'})
        })
    }
}
