import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    onSignupRequest
} from '../../actions/actions';

const Signup = () => {
    const dispatch = useDispatch();

    const handleOnSubmit = e => {
        e.preventDefault();
        
        onSignupRequest();
        console.log('handleOnSubmit');
    };

    return (<div>
        <form action="post" onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" required autoComplete="false" name="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" required autoComplete="false" name="password" />
            </div>

            <div>
                <button type="submit">Signup</button>
            </div>
        </form>

        <Link to="/">Login</Link>
    </div>)
};

export default Signup;