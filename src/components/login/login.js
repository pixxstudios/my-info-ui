import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Login = () => (
    <div className="login">
        <form className="card">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" required autoComplete="false" name="email" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" required autoComplete="false" name="password" />
            </div>

            <div className="footer">
                <button className="login-button" type="submit">Login</button>
                <Link to="/signup" className="button signup">Signup</Link>
            </div>
        </form>

    </div>
);

export default Login;