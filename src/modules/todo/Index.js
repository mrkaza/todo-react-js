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
    const todos = useSelector((state)=> state.firestore.ordered.todos);
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