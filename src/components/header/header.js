import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <span>Welcome to the travelog</span>
            <Link to="/" className="logout">Logout</Link>
        </div>
    );
};

export default Header;