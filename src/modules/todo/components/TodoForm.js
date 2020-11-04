import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../actions/todoActions';

const TodoForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit= (e) => {
        e.preventDefault();
        
        dispatch(addTodo(title,description))

        setTitle('');
        setDescription('');
    }

    return (
        <form className="col s12" onSubmit={handleSubmit}>
            <div className="row">
                <div className="input-field col s12">
                    <input value={title} id="title" type="text" onChange={(e)=> setTitle(e.target.value)} />
                    <label htmlFor="title">Title</label>
                </div>
                <div className="input-field col s12">
                    <input value={description} id="description" type="text" onChange={(e)=> setDescription(e.target.value)} />
                    <label htmlFor="description">Description</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action">Add Todo
                </button>
            </div>
        </form>
    )
}

export default TodoForm