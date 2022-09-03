import React from 'react';
import {
  NoDataContainer,
  NoDataImageDiv,
  NoDataImage,
  NoDataText,
} from './style';
import search from '../../assets/svgs/search.svg';
import chart from '../../assets/svgs/chart.svg';

export interface NoDataProps {
  type: 'search' | 'chart';
}

const NoData = ({ type }: NoDataProps) => {
  return (
    <NoDataContainer type={type}>
      <NoDataImageDiv>
        <NoDataImage src={type === 'search' ? search : chart} />
      </NoDataImageDiv>
      <NoDataText>
        {type === 'search'
          ? "We couldn't find any matches for your query"
          : 'No data to display'}
      </NoDataText>
    </NoDataContainer>
  );
};

export default NoData;
