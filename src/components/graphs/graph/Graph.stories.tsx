import { ComponentStory, ComponentMeta } from '@storybook/react';
import Graph from './Graph';
import CardSecondary from '../../cardSecondary/CardSecondary';
import { areaChartMock, doughnutMock } from '../graphsMockData';

export default {
  title: 'Graph',
  component: Graph,
} as ComponentMeta<typeof Graph>;

const Template: ComponentStory<typeof Graph> = (args) => (
  <CardSecondary title={args.type === 'area' ? 'Dates' : 'Sources'}>
    <Graph {...args} />
  </CardSecondary>
);

export const AreaChartExample = Template.bind({});
AreaChartExample.args = {
  type: 'area',
};

export const DoughnutExample = Template.bind({});
DoughnutExample.args = {
  type: 'doughnut',
};
