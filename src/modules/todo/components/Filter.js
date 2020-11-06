import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {orderBy} from '../actions/todoActions';

const Filter = () => {
    // const [search, setSearch] = useState('');
    const [order, setOrder] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setOrder(e.target.value);
    }
    const filter = () => {
        dispatch(orderBy(order))
    }

    return (
        <div className="row">
            {/* <div className="col s6 search">
                <form className="col s10">
                    <div className="input-field col s12">
                        <input value={search} type="text" placeholder="Search todo" onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </form>
                <div className="col s2">
                    <button className="btn btn-floating">s</button>
                </div>
            </div> */}
            <div className="col s5 search">
                search
            </div>
            <div className="col s6 search">
                <form className="col s10">
                    <label htmlFor="orderBy">Order By:</label>
                    <select value={order} name="orderBy" id="orderBy" onChange={handleChange}>
                        <option value="created.asc">Created at.asc</option>
                        <option value="created.desc">Created at.desc</option>
                        <option value="completed">Completed</option>
                        <option value="not-completed">Not completed</option>
                    </select>
                </form>
                <button onClick={filter} className="z-depth-0 grey lighten-3 black-text btn-small col s2 btn ">Filter</button>
            </div>
        </div>
    )
}

export default Filter;