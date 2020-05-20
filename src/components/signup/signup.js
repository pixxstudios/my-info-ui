import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    const handleOnSubmit = e => {
        e.preventDefault();
        
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