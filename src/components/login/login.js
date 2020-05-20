import React from 'react';

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
    </div>
);

export default Login;