import React from 'react';
import {Story} from "@storybook/react";
import Header from "../components/Header/Header";

export default {
    title: 'Header',
    component: Header
}

const Template: Story = () => <Header />
export const HeaderRender = () => <Header/>