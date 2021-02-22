import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionTypes, PostsType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const Profile: React.FC<ProfilePropsType> = ({posts, newPostText, dispatch}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer posts={posts} newPostText={newPostText} dispatch={dispatch}/>
        </div>
    );
}

export default Profile;