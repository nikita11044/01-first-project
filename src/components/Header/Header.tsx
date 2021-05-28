import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import { Button } from 'antd';

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
                        ? <div>{props.login} - <Button onClick={props.logout}>Log out</Button></div>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
})

export default Header;