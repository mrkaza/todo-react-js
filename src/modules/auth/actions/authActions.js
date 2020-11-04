export const login = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
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
    return (dispatch, getState, { getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        });
    }
}

export const register = (newUser) => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase =getFirebase();

        firebase.auth().createUserWithEmailAndPassword(
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
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const provider = new firebase.auth.FacebookAuthProvider();
        

        firebase.auth().signInWithPopup(provider).then(() => {
            dispatch({type:'FACEBOOK_LOGIN'})
        })
    }
}
