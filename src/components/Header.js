import React from 'react'
import { Link } from "react-router-dom"
import "./styles/Header.scss"

const Header = () => {
    return (
        <header className="Header">
            <Link to="/" className="Header__link" >
                Home
            </Link>
            <Link to="/todo" className="Header__link" >
                Todos
            </Link>
        </header>
    )
}

export default Header
