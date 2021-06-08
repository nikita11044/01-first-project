import React from "react";
import classes from "./Users.module.css";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../assets/default-user-avatar.jpg";
import {UserType} from "../../redux/users-reducer";
import {useDispatch} from "react-redux";
import {Paginator} from "../common/Paginator/Paginator";
import {Button, Card} from "antd";
import Meta from "antd/es/card/Meta";

type UsersPropsType = {
    user: UserType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingInProgress: string[]
}

const Users: React.FC<UsersPropsType> = ({user, follow, unfollow, followingInProgress}) => {

    const dispatch = useDispatch()

    return <Card
        id={user.id}
        hoverable
        style={{ width: 200, margin: '10px 0' }}
        cover={
            <NavLink to={'/profile/' + user.id}>
                <img className={classes.userPhoto}
                     src={user.photos.small ? user.photos.small : defaultAvatar}
                     alt="user avatar"/>
            </NavLink>
        }>
        <div className={classes.metaWrapper}>
        <Meta title={user.name} description={user.status}/>
            {
                user.followed ?
                    <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        dispatch(unfollow(user.id))
                    }
                    }>Unfollow</Button> :
                    <Button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        dispatch(follow(user.id))
                    }
                    }>Follow</Button>
            }
        </div>
    </Card>
}

export default Users