import React, {useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {login} from './actions/authActions';
import Facebook from './components/Facebook';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const errorMessage = useSelector(state=> state.auth.errorMessage);

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = {
            email: email,
            password: password
        };
        dispatch(login(credentials))
        setEmail('');
        setPassword('')
    }

    return (
        <div className="container">
            <div className="row">
                <form className="col s12" onSubmit={handleSubmit}>
                    <div className="input-field col s12">
                        <input value={email} id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-field col s12">
                        <input value={password} id="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                        <label htmlFor="password">Password</label>
                    </div>
                    <div className="btn-middle col s12">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Login
                        </button>
                    </div>
                </form>
                <p className=" col s12 red-text text-darken-1 error-message">{errorMessage}</p>
            </div>
            <p className="or">or</p>
            <div className="row">
                <div className="col s12 btn-middle">
                    <Facebook />
                </div>
            </div>
        </div>
    )
}

export default Login