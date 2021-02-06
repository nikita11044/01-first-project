import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

export type ProfilePropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPost: (postMessage: string) => void
    updateText: (newText: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({posts, newPostText, addPost, updateText}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} newPostText={newPostText} addPost={addPost} updateText={updateText}/>
        </div>
    );
}

export default Profile;