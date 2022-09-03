import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import InputComponent from './InputComponent';

export default {
  title: 'InputComponent',
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
);

export const InputExample = Template.bind({});
