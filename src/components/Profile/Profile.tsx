import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

export type ProfilePropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const Profile: React.FC<ProfilePropsType> = ({posts, addPost}) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts} addPost={addPost} />
        </div>
    );
}

export default Profile;