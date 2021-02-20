import React from 'react';
import {Story} from "@storybook/react";
import Profile, {ProfilePropsType} from "../components/Profile/Profile";
import store from "../redux/store";
import {v1} from "uuid";

export default {
    title: 'Profile',
    component: Profile
}

const profilePageData = {
    newPostText: '',
    posts: [
        {id: v1(), message: 'Hi, how are you?', likesCount: 12},
        {id: v1(), message: "It's my first post", likesCount: 11}
    ]
}

const Template: Story<ProfilePropsType> = (args) => <Profile {...args} />
export const ProfileRender = Template.bind({})
ProfileRender.args = {
    /**
     * An array of posts
     */
    posts: profilePageData.posts,
    /**
     * A dispatch function
     */
    dispatch: store.dispatch,
}