import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { Skeleton } from '@mui/material';
import {
  SkeletonSecondaryCardContainer,
  SkeletonPieContainer,
  SkeletonDoughnutOuter,
  SkeletonDoughnutInner,
  sx,
} from './style';
import { StyledUL, StyledLI } from '../graphs/doughnut/styles';
import { COLORS } from '../../utils/constants/colors';

const SkeletonDoughnut = () => {
  const { width } = useWindowSize();
  return (
    <SkeletonSecondaryCardContainer>
      <SkeletonPieContainer>
        <SkeletonDoughnutOuter
          variant='circular'
          width={'90%'}
          height={'90%'}
          sx={sx}
        />
        <SkeletonDoughnutInner />
      </SkeletonPieContainer>
      <StyledUL>
        <StyledLI color={COLORS.secondary}>
          <Skeleton variant='text' sx={sx} width={'80%'} height={'0.875rem'} />
        </StyledLI>
        <StyledLI color={COLORS.secondary}>
          <Skeleton variant='text' sx={sx} width={'80%'} height={'0.875rem'} />
        </StyledLI>
        {width > 1500 && (
          <StyledLI color={COLORS.secondary}>
            <Skeleton
              variant='text'
              sx={sx}
              width={'80%'}
              height={'0.875rem'}
            />
          </StyledLI>
        )}
      </StyledUL>
    </SkeletonSecondaryCardContainer>
  );
};

export default SkeletonDoughnut;
