import React from 'react';
import {Story} from "@storybook/react";
import Navbar from "../components/Navbar/Navbar";

export default {
    title: 'Navbar',
    component: Navbar
}

const Template: Story = () => <Navbar />

export const NavbarRender = Template.bind({})

