import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {deleteTodo, completedTodo} from '../actions/todoActions';
import moment from 'moment'

const TodoItem = ({todo}) => {
    const dispatch = useDispatch();
    const deleteSelected = () => {
        dispatch(deleteTodo(todo.id))
    }

    const completeTodo = () => {
        dispatch(completedTodo(todo.id))
    }

    return (
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <div className="todo-item">
                    <div className="actions teal">
                        <p className="title"><Link to={'/todo/'+ todo.id}>{todo.title}</Link></p>
                        <div className="action-btn">
                            <button className="btn-small btn-floating green" onClick={completeTodo}><i className="material-icons">done</i></button>
                            <button className="btn-small btn-floating red" onClick={deleteSelected}><i className="material-icons">delete</i></button>
                        </div>
                    </div>
                    <p className={`desc ${todo.completed ? 'completed' : ""}` }>{todo.description}</p>
                    <div className="edit">
                        <p className="created">Created at: {moment(todo.createdAt.toDate()).calendar()}</p>
                        <button className="btn-small btn-floating grey"><i className="material-icons">edit</i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}   

export default TodoItem;