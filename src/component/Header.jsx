import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import '../css/nav.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
    return (
        <div>
            <header>
                <div>
                <NavLink exact to="/" className="nav-logo">
                    <img src="images/logo.png" alt="Logo" style={{ width: '60px', height: '60px' }} />
                </NavLink>
                </div>

                <div className="nav-container">
                    <div className='company-info'>
                        <h2 class='headText'>Power Backup System Pvt. Ltd.</h2>
                    </div>
                    <nav className="navbar">
                        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={toggleMenu}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/about"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={toggleMenu}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/product"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={toggleMenu}
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/client"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={toggleMenu}
                                >
                                    Client
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/contact"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={toggleMenu}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/quote"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={toggleMenu}
                                >
                                    Get Quote
                                </NavLink>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={toggleMenu}>
                            <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header
