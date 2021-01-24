import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type myPostsPropsType = {
    posts: Array<PostsType>
}

const MyPosts: React.FC<myPostsPropsType> = (props) => {

    const postsElements = props.posts.map(el => {
        return  <Post message={el.message} likesCount={el.likesCount}/>
    })

    return (
        <div>
            <h3 className={classes.postsBlock}>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
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