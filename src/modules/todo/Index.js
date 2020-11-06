import React from 'react';
import TodoItem from './components/TodoItem';
import {useSelector} from 'react-redux';
import TodoForm from './components/TodoForm';
import {useFirestoreConnect } from 'react-redux-firebase';
import Filter from './components/Filter';

const Todo = () => {
    const authId = useSelector(state=> state.firebase.auth.uid)
    useFirestoreConnect([
        {collection:'todos', where: [['userId', '==', authId]]}
    ])
    let todos = useSelector((state)=> state.firestore.ordered.todos);

    const order = useSelector(state=> state.todo.sortBy)

    if (todos) {
        if(order) {
            if(order === 'created.asc') {
                todos =todos.slice().sort((a,b) => parseFloat(a.createdAt.seconds)- parseFloat(b.createdAt.seconds));
            } else if (order === 'created.desc') {
                todos = todos.slice().sort((a, b) => parseFloat(b.createdAt.seconds) - parseFloat(a.createdAt.seconds));
            } else if(order === 'completed') {
                todos = todos.filter(todo=> {
                    return todo.completed === true
                })
            } else if (order === 'not-completed') {
                todos = todos.filter(todo => {
                    return todo.completed === false
                })
            }
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <TodoForm />
                </div>
                <div className="col s12">
                    <Filter />
                </div>
                {todos && todos.length === 0 ? (
                    <div className="col s12">
                        No todos.
                    </div>
                ) : (
                    <div className="col s12">
                        {todos && todos.map(todo => {
                            return (
                                <TodoItem todo={todo} key={todo.id} />
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

// export default firestoreConnect([{collection:'todos'}])(Todo);

export default Todo;