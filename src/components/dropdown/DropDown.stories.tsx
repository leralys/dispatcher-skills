import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import {
  topFilters,
  endpointsFilters,
} from '../../utils/constants/filterStrings';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Regular = Template.bind({});
Regular.args = {
  ...Regular.args,
  placeholder: topFilters[0].filter.name,
  options: topFilters[0].options,
  insearchbox: false,
};

export const InSearchBox = Template.bind({});
InSearchBox.args = {
  ...InSearchBox.args,
  placeholder: endpointsFilters.options[0].name,
  options: endpointsFilters.options,
  insearchbox: true,
};
