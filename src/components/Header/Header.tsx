import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    isAuth: boolean
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.loginBlock}>
                {
                    props.isAuth ?
                        props.login :
                        <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;