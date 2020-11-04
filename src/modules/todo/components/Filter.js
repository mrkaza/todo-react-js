import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const Filter = () => {
    const [search, setSearch] = useState('');
    const [order, setOrder] = useState(null);

    const handleChange = (e) => {
        setOrder(e.target.value)
    }
    console.log(search)

    return (
        <div className="row">
            <div className="col s6">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={search} type="text" placeholder="Search todo" onChange={(e) => setSearch(e.target.value)} />
                        </div>
                    </div>
                </form>
            </div>
            <div className="col s6">
                {/* <form>
                    <label htmlFor="orderBy">Order By:</label>
                    <select value={order} name="orderBy" id="orderBy" onChange={handleChange}>
                        <option value="created.asc">asc</option>
                        <option value="created.desc">desc</option>
                    </select>
                </form> */}
            </div>
        </div>
    )
}

export default Filter;