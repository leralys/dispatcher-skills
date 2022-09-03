import React from 'react';
import Logo from './Logo';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: Logo,
  title: 'MainLogo',
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Main = Template.bind({});
Main.args = { ...Main.args };

export const Big = Template.bind({});
Big.args = { ...Big.args, height: 5 };

export const Small = Template.bind({});
Small.args = { ...Small.args, height: 2 };
