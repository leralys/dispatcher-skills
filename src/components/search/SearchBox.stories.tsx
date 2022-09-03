import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBox from './SearchBox';

export default {
  title: 'SearchBox',
  component: SearchBox,
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = (args) => (
  <SearchBox {...args} />
);

export const SearchExample = Template.bind({});
SearchExample.args = {
  ...SearchExample.args,
};
