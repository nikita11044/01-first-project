import React, {ChangeEvent, useState} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

export type myPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

const MyPosts: React.FC<myPostsPropsType> = ({posts, addPost}) => {
    const [newPostTextValue, setNewPostTextValue] = useState<string>('')

    const postsElements = posts.map(el => {
        return  <Post message={el.message} likesCount={el.likesCount}/>
    })

    const addPostCallback = () => {
        addPost(newPostTextValue)
        setNewPostTextValue('')
    }

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostTextValue(e.currentTarget.value)
    }

    return (
        <div>
            <h3 className={classes.postsBlock}>My posts</h3>
            <div>
                <div>
                    <textarea value={newPostTextValue} onChange={onChange}></textarea>
                </div>
                <div>
                    <button onClick={addPostCallback}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {
                    postsElements
                }
            </div>
        </div>
    );
}

export default MyPosts;