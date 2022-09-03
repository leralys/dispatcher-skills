import styled from 'styled-components';
import { FlexColumn, FlexRow } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';

export const DashboardContainer = styled(FlexColumn)`
  max-width: 100vw;
  min-height: 100vh;
  background: ${COLORS.lightGrey};
`;

export const DashboardContent = styled(FlexColumn)`
  margin-top: 4.625rem;
  width: 100%;
  padding-inline: 12.5%;
  align-self: center;
  overflow-x: hidden;

  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    padding-inline: 1.25rem;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    padding-inline: 1rem;
  }
`;

export const MainContent = styled(FlexRow)<{ isPortrait: boolean }>`
  height: ${({ isPortrait }) => (isPortrait ? 'fit-content' : '60vw')};
  gap: 0.94rem;
`;
