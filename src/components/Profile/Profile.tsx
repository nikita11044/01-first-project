import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsType} from "../../redux/store";

export type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<ProfilePropsType> = ({posts, newPostText, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch}/>
        </div>
    );
}

export default Profile;