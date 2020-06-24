import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-lg bg-info">
            <div className="navbar-brand">
                Pizza Task
            </div>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/"
                        exact
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/menu"
                    >
                        Menu
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/cart"
                    >
                        Cart
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/orderStory"
                    >
                        Orders story
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}