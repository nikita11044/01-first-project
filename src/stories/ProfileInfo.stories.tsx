import React from 'react';
import {Story} from "@storybook/react";
import ProfileInfo from "../components/Profile/ProfileInfo/ProfileInfo";

export default {
    title: 'ProfileInfo',
    component: ProfileInfo
}

const Template: Story = () => <ProfileInfo />
export const ProfileInfoRender = Template.bind({})