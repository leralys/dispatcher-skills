import React from 'react';
import { Skeleton } from '@mui/material';
import { SkeletonCardImage, sx } from './style';
import {
  CardPrimaryStyled,
  CardImgContainer,
  Article,
} from '../cardPrimary/style';

const SkeletonCardList = () => {
  const list = Array(10).fill(0);
  return (
    <>
      {list.map((el, index) => (
        <CardPrimaryStyled key={`skeleton-card-${index}`}>
          <CardImgContainer>
            <SkeletonCardImage
              sx={sx}
              variant='rectangular'
              width={'100%'}
              height={'100%'}
            />
          </CardImgContainer>
          <Article isRTL={false}>
            <Skeleton
              variant='text'
              sx={sx}
              width={'30%'}
              height={'1.375rem'}
            />
            <div>
              <Skeleton
                variant='text'
                sx={sx}
                width={'95%'}
                height={'2.5rem'}
              />
            </div>
            <Skeleton
              variant='text'
              sx={sx}
              width={'50%'}
              height={'1.375rem'}
            />
            <div>
              <Skeleton variant='text' sx={sx} width={'100%'} />
              <Skeleton variant='text' sx={sx} width={'100%'} />
              <Skeleton variant='text' sx={sx} width={'100%'} />
              <Skeleton variant='text' sx={sx} width={'100%'} />
            </div>
          </Article>
        </CardPrimaryStyled>
      ))}
    </>
  );
};

export default SkeletonCardList;
