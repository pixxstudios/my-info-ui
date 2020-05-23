import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    onSignupRequest
} from '../../actions/actions';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleOnSubmit = e => {
        e.preventDefault();
        console.log(e);
        onSignupRequest(dispatch, email, password);
        console.log('handleOnSubmit');
    };

    return (<div>
        <form action="post" onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" required autoComplete="false" name="email"
                    onChange={ e => setEmail(e.target.value) } />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" required autoComplete="false" name="password"
                    onChange={ e => setPassword(e.target.value) }/>
            </div>

            <div>
                <button type="submit">Signup</button>
            </div>
        </form>

        <Link to="/">Login</Link>
    </div>)
};

export default Signup;