import styled from 'styled-components';
import { FlexRow } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';

export const StyledNav = styled(FlexRow)`
  background: ${COLORS.darkPurple};
  height: max(4.625rem, 5%);
  align-items: center;
  padding-inline: 1.25rem;
  position: fixed;
  z-index: 10000;

  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    padding-inline: 1rem;
  }
  @media only screen and (max-width: ${SCREENS.breakpoint500}px) {
    justify-content: space-between;
  }
`;

export const LogoBox = styled(FlexRow)`
  width: 11.69%;
  align-items: center;

  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    width: max(15.23%, 5rem);
  }
`;
