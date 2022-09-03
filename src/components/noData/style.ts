import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';
import { FlexColumn } from '../../styles/sharedStyles';
import { NoDataProps } from './NoData';

export const NoDataContainer = styled(FlexColumn)`
  align-items: center;
  justify-content: center;
  min-height: fit-content;
  margin-top: ${({ type }: NoDataProps) => type === 'search' && '20vh'};
  @media only screen and (max-width: ${SCREENS.laptopM}px) {
    margin-top: 3rem;
  }
  @media only screen and (max-width: ${SCREENS.mobileM}px) {
    margin-top: 6rem;
  }
`;

export const NoDataImageDiv = styled.div`
  height: 6.93vw;
  width: 6.93vw;
  @media only screen and (max-width: ${SCREENS.laptopM}px) {
    height: 32%;
    width: 32%;
  }
`;

export const NoDataImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const NoDataText = styled.p`
  font-size: 1.125rem;
  color: ${COLORS.purple};
  margin-top: 1rem;
  text-align: center;
`;
