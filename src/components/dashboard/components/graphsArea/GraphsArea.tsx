import React from 'react';
import { useAppSelector } from '../../../../store/hooks';
import CardSecondary from '../../../cardSecondary/CardSecondary';
import Graph from '../../../graphs/graph/Graph';
import NoData from '../../../noData/NoData';
import SkeletonDoughnut from '../../../skeletons/SkeletonDoughnut';
import SkeletonAreaChart from '../../../skeletons/SkeletonAreaChart';
import { GraphsContainer } from './styles';
import { RESPONSES } from '../../../../utils/constants/responseStatus';

const GraphsArea: React.FC = () => {
  const status = useAppSelector((state) => state.news.status);
  const totalResults = useAppSelector((state) => state.news.totalResults);
  return (
    <GraphsContainer>
      <CardSecondary title='Sources'>
        {status === RESPONSES.LOADING && <SkeletonDoughnut />}
        {totalResults > 0 && status !== RESPONSES.LOADING && (
          <Graph type='doughnut' />
        )}
        {totalResults === 0 && status !== RESPONSES.LOADING && (
          <NoData type='chart' />
        )}
      </CardSecondary>
      <CardSecondary title='Dates'>
        {status === RESPONSES.LOADING && <SkeletonAreaChart />}
        {totalResults > 0 && status !== RESPONSES.LOADING && (
          <Graph type='area' />
        )}
        {totalResults === 0 && status !== RESPONSES.LOADING && (
          <NoData type='chart' />
        )}
      </CardSecondary>
    </GraphsContainer>
  );
};

export default GraphsArea;
