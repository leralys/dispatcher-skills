import React from 'react';
import { Skeleton } from '@mui/material';
import {
  SkeletonSecondaryCardContainer,
  SkeletonAreaChartStyled,
  sx,
} from './style';

const SkeletonAreaChart = () => {
  return (
    <SkeletonSecondaryCardContainer>
      <SkeletonAreaChartStyled
        variant='rectangular'
        width={'100%'}
        height={'70%'}
        sx={sx}
      />
      <Skeleton variant='text' sx={sx} width={'100%'} height={'1.375rem'} />
    </SkeletonSecondaryCardContainer>
  );
};

export default SkeletonAreaChart;
