import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import MessagesIcon from "../common/MessagesIcon/MessagesIcon";
import UsersIcon from "../common/UsersIcon/UsersIcon";
import ProfileIcon from "../common/ProfileIcon/ProfileIcon";
import NewsIcon from "../common/NewsIcon/NewsIcon";
import MusicIcon from "../common/MusicIcon/MusicIcon";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}>
                    <ProfileIcon />
                    <NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <MessagesIcon />
                    <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <UsersIcon />
                    <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
                </li>
                <li className={classes.item}>
                    <NewsIcon />
                    <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <MusicIcon />
                    <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;