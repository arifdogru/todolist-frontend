import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link>
        </header>
    )
};

const headerStyle = {
    background: "#40bfc1",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;