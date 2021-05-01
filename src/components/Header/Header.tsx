import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string | null
    isAuth: boolean
    logout: () => void
}

const Header = React.memo((props: HeaderPropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.loginBlock}>
                {
                    props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
})

export default Header;