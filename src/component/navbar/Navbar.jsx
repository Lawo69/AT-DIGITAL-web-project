import './Navbar.css';
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavItemClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav>
            <div className="navbar">
                <Link to="/" className='title'>
                    <img src="/img/logo.png" alt="Logo" />
                </Link>
                <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <NavLink to="/services" onClick={handleNavItemClick}>
                        SERVICES
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus" onClick={handleNavItemClick}>
                        ABOUT US
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={handleNavItemClick}>
                        CONTACT US
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/careers" onClick={handleNavItemClick}>
                        CAREERS
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};