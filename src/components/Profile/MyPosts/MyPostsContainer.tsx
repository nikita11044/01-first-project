import React, {ChangeEvent} from 'react';
import {AddPostAC, UpdatePostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer: React.FC = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const posts = state.profileReducer.posts
                    const newPostText = state.profileReducer.newPostText
                    const addPost = () => {
                        store.dispatch(AddPostAC())
                    }
                    const updateNewPostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
                        store.dispatch(UpdatePostTextAC(e.currentTarget.value))
                    }
                    return <MyPosts posts={posts}
                                    newPostText={newPostText}
                                    addPost={addPost}
                                    updateNewPostText={updateNewPostText}/>
                }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;