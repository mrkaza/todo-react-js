import {firestore} from '../../../consts/fbConfig';

export const addTodo = (title, description) => {
    return (dispatch, getState) => {
        //make call to firebase
        const id = getState().firebase.auth.uid
        firestore.collection('todos').add({
            title: title,
            description: description,
            completed: false,
            createdAt: new Date(),
            userId: id

        }).then(() => {
            dispatch({type: 'ADD_TODO', title})
        }).catch(err => {
            dispatch({type: 'ADD_TODO_ERROR',err})
        })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        firestore.collection('todos').doc(id).delete().then(() => {
            dispatch({type: 'DELETE_TODO'})
        })
    }
}

export const completedTodo = (id) => {
    return (dispatch) => {

        return firestore.collection('todos').doc(id).update({
            completed: true
        }).then(() => {
            dispatch({type: 'COMPLETED_TODO'})
        })
    }
}

export const orderBy = (orderBy) => {
    return {
        type: 'ORDER_BY',
        orderBy
    }
}