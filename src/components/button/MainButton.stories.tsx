import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainButton from './MainButton';

export default {
  title: 'Button',
  component: MainButton,
} as ComponentMeta<typeof MainButton>;

const Template: ComponentStory<typeof MainButton> = (args) => (
  <MainButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  children: 'Primary',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Secondary.args,
  children: 'Secondary',
  color: 'secondary',
};
