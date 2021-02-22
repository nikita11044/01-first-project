import React, {ChangeEvent} from 'react';
import Post from "./Post/Post";
import {ActionTypes, PostsType} from "../../../redux/store";
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

export type MyPostsContainerPropsType = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: ActionTypes) => void
}

const MyPostsContainer: React.FC<MyPostsContainerPropsType> = ({posts,newPostText, dispatch}) => {
    const postsElements = posts.map(el => {
        return <Post message={el.message} likesCount={el.likesCount}/>
    })

    const addPost = () => {
        dispatch(AddPostAC())
    }

    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(UpdatePostTextAC(e.currentTarget.value))
    }

    return (
        <MyPosts posts={posts} newPostText={newPostText} addPost={addPost} updateNewPostText={updateNewPostText}/>
    );
}

export default MyPostsContainer;