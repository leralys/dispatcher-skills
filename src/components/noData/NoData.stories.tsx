import React from 'react';
import NoData from './NoData';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: NoData,
  title: 'NoData',
} as ComponentMeta<typeof NoData>;

const Template: ComponentStory<typeof NoData> = (args) => <NoData {...args} />;

export const Search = Template.bind({});
Search.args = {
  ...Search.args,
  type: 'search',
};

export const Chart = Template.bind({});
Chart.args = {
  ...Search.args,
  type: 'chart',
};
