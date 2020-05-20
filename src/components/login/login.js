import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => (
    <div>
        <form>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" required autoComplete="false" name="email" />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" required autoComplete="false" name="password" />
            </div>

            <div>
                <button type="submit">Login</button>
            </div>
        </form>

        <Link to="/signup">Signup</Link>
    </div>
);

export default Login;