import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
                </li>
                <li className={classes.item}>News</li>
                <li className={classes.item}>Music</li>
            </ul>
        </nav>
    );
}

export default Navbar;