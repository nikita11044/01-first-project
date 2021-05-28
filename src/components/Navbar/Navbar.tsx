import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Menu} from "antd";
import SubMenu from 'antd/lib/menu/SubMenu';
import {CommentOutlined, CustomerServiceFilled, ProfileOutlined, UserOutlined} from "@ant-design/icons";

const Navbar = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <SubMenu key="sub1" icon={<ProfileOutlined />}title="Profile">
                <Menu.Item key="1">
                    <NavLink to='/profile' activeClassName={classes.active}>My Page</NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <NavLink to='/dialogs' activeClassName={classes.active}>Messages</NavLink>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="3" icon={<UserOutlined />}>
                <NavLink to='/users' activeClassName={classes.active}>Users</NavLink>
            </Menu.Item>
            <Menu.Item key="4" icon={<CommentOutlined />}>
                <NavLink to='/news' activeClassName={classes.active}>News</NavLink>
            </Menu.Item>
            <Menu.Item key="5" icon={<CustomerServiceFilled />}>
                <NavLink to='/music' activeClassName={classes.active}>Music</NavLink>
            </Menu.Item>
        </Menu>
    )
}

export default Navbar;