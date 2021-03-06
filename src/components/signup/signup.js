import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
    onSignupRequest
} from '../../actions/actions';
import './style.scss';

const Signup = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { message } = useSelector(state => state);

    const handleOnSubmit = e => {
        e.preventDefault();
        onSignupRequest(dispatch, email, password);
    };

    return (
    <div className="signup">
        <form action="post" onSubmit={handleOnSubmit} className="card">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" required autoComplete="false" name="email"
                    onChange={ e => setEmail(e.target.value) } />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" required autoComplete="false" name="password"
                    onChange={ e => setPassword(e.target.value) }/>
            </div>

            <div className="form-group">
                <button type="submit" className="signup-button">Signup</button>
                <Link to="/">Login</Link>
            </div>
            <div className="message">{message}</div>
        </form>
    </div>)
};

export default Signup;