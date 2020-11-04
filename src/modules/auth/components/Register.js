import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../actions/authActions';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const dispatch = useDispatch();

    const errorMessage = useSelector(state => state.auth.errorMessage);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            password: password,
            name: name,
            surname: surname
        }
        dispatch(register(newUser))
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="input-field col s12">
                        <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="name" type="text" onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="input-field col s12">
                        <input id="surname" type="text" onChange={(e) => setSurname(e.target.value)} />
                        <label htmlFor="surname">Last Name</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Register
                    </button>
                </form>
                <p className=" col s12 red-text text-darken-1 error-message">{errorMessage}</p>

            </div>
        </div>
    )
}

export default Register