import styled from 'styled-components';
import { FlexRow } from '../../../../styles/sharedStyles';
import { COLORS } from '../../../../utils/constants/colors';
import { SCREENS } from '../../../../utils/constants/screenSizes';
import { StyledClearIcon } from '../../../recentSearches/styles';

export const AlertClearIcon = styled(StyledClearIcon)`
  margin-left: 0.5rem;
  cursor: pointer;
`;

export const FilterDiv = styled(FlexRow)`
  padding-block: 1.25rem;
  align-items: center;
  border-bottom: 1px solid ${COLORS.secondary};
  gap: min(1.25rem, 2%);
  overflow-x: hidden;

  @media only screen and (max-width: 880px) {
    width: 180%;
    margin-left: -8rem;
    padding-left: 2.125rem;
    padding-block: 0;
    overflow-x: hidden;
    background: ${COLORS.white};
    border-top: 1px solid ${COLORS.secondary};
    gap: max(1.25rem, 3%);
  }
  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    width: 100%;
    margin-left: 0;
    padding-left: 0;
    display: grid;
    background: none;
    grid-template-columns: repeat(3, 1fr);
    padding-block: 1rem;
    border-top: none;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MobileEndpointFilterDiv = styled.div`
  width: 120%;
  margin-left: -2rem;
  padding-left: 2rem;
  background: ${COLORS.white};
  border-bottom: 1px solid ${COLORS.secondary};
`;
