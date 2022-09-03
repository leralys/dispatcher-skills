import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardSecondary from './CardSecondary';

export default {
  title: 'CardSecondary',
  component: CardSecondary,
} as ComponentMeta<typeof CardSecondary>;

const Template: ComponentStory<typeof CardSecondary> = (args) => (
  <CardSecondary {...args} />
);

export const SecondaryDates = Template.bind({});
SecondaryDates.args = {
  title: 'Dates',
  children: <div style={{ width: '100%', height: '80%' }}></div>,
};

export const SecondarySources = Template.bind({});
SecondarySources.args = {
  title: 'Sources',
  children: <div style={{ width: '100%', height: '80%' }}></div>,
};
