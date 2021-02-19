import React from 'react';
import {Story} from "@storybook/react";
import MyPosts, {myPostsPropsType} from "../components/Profile/MyPosts/MyPosts";
import store from "../redux/state";
import {v1} from "uuid";

export default {
    title: 'MyPosts',
    component: MyPosts
}

const posts = [
    {id: v1(), message: 'Hi, how are you?', likesCount: 12},
    {id: v1(), message: "It's my first post", likesCount: 11}
]

const Template: Story<myPostsPropsType> = (args) => <MyPosts {...args}/>
export const MyPostsRender = Template.bind({})
MyPostsRender.args = {
    /**
     * An array of posts
     */
    posts: posts,
    /**
     * A dispatch function
     */
    dispatch: store.dispatch,
}