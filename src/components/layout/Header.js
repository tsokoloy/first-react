import React from 'react'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header style = {headerSytle}>
            <h1>Todo List</h1>
            <Link style={LinkStyle} to='/'>Home</Link> | <Link style={LinkStyle} to='/about'>About</Link>
        </header>
    )
}

const headerSytle = {
    background: '#333',
    color: '#fff',
    textAlign : 'center',
    padding: '10px'
}

const LinkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
