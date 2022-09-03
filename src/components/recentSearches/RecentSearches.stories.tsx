import { ComponentStory, ComponentMeta } from '@storybook/react';
import RecentSearches from './RecentSearches';
import { filters } from '../../mockData/filterStrings';

export default {
  title: 'RecentSearches',
  component: RecentSearches,
} as ComponentMeta<typeof RecentSearches>;

const Template: ComponentStory<typeof RecentSearches> = (args) => (
  <RecentSearches {...args} />
);

export const RecentSearchesExample = Template.bind({});
RecentSearchesExample.args = {
  ...RecentSearchesExample.args,
  history: filters.topHeadlines.category,
};
