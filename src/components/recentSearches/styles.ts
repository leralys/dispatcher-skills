import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../styles/sharedStyles';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';
import { ReactComponent as Clear } from '../../assets/svgs/clearIcon.svg';
import { dropdownSharedStyles } from '../../styles/sharedStyles';

export const SearchesContainer = styled(FlexColumn)`
  ${dropdownSharedStyles}
  width: 41.44rem;
  position: absolute;
  z-index: 6;
  left: 12.6%;
  top: 92%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  padding-block: 0.5rem;
  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    width: 65%;
    left: 16.5%;
  }
  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    width: 80%;
    left: 17%;
  }
  @media only screen and (max-width: ${SCREENS.breakpoint500}px) {
    width: 69%;
    left: 27%;
  }
`;

export const SearchesHeader = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  padding-inline: 1rem 0;
`;
export const SearchesTitle = styled.span`
  text-transform: uppercase;
  color: ${COLORS.purple};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: default;
`;

export const SearchesList = styled.ul`
  background: ${COLORS.white};
  width: 100%;
  list-style: none;
`;

export const SearchesItem = styled(FlexRow)`
  justify-content: space-between;
  align-items: center;
  cursor: default;
  &:hover {
    background: ${COLORS.lightPurple};
  }
`;
export const SearchesText = styled(FlexColumn)`
  color: ${COLORS.purple};
  font-size: 0.875rem;
  height: 100%;
  padding-left: 1rem;
`;

export const StyledClearIcon = styled(Clear)`
  height: 0.7rem;
`;
