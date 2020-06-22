import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';

import { onLoginRequest } from '../../actions/actions';

const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { message } = useSelector(state => state);

    const handleOnSubmit = e => {
        e.preventDefault();
        onLoginRequest(dispatch, email, password);
    };

    return (
    <div className="login">
        <form className="card" onSubmit={handleOnSubmit} >
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" required autoComplete="false" name="email" onChange={e => setEmail(e.target.value)} />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" required autoComplete="false" name="password" onChange={e => setPassword(e.target.value)} />
            </div>

            <div className="footer">
                <button className="login-button" type="submit">Login</button>
                <Link to="/signup" className="button signup">Signup</Link>
            </div>
            <div className="message">{message}</div>
        </form>
    </div>
);
}

export default Login;