import React from 'react';
import PageTitle from './PageTitle';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  component: PageTitle,
  title: 'PageTitle',
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const TopHeadlines = Template.bind({});
TopHeadlines.args = {
  ...TopHeadlines.args,
};

export const TotalResults = Template.bind({});
TotalResults.args = { ...TotalResults.args };
