import { Input } from '@mui/material';
import styled from 'styled-components';
import { ReactComponent as Icon } from '../../assets/svgs/inputIcon.svg';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';
import { FlexRow } from '../../styles/sharedStyles';

export const SearchContainer = styled(FlexRow)<{ isFocused: boolean }>`
  ${({ isFocused }) => `
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 0.625rem;
  background: ${COLORS.white};
  padding: 1rem 0 1rem 1.125rem;
  height: 3.125rem;
  transition: all 0.3s ease-out;
  width: ${isFocused ? 41.44 : 26.44}rem;
  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    width: ${isFocused ? 68 : 58}%;
  }
  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    width: ${isFocused ? 85 : 75}%;
  }
  @media only screen and (max-width: ${SCREENS.breakpoint500}px) {
    width: 75%;
    background: ${isFocused ? `${COLORS.white}` : `${COLORS.darkPurple}`};
    width: ${isFocused ? 75 : 7.5}%;
    padding-inline: ${isFocused ? 'inherit' : 0};
  `}
`;

export const InputStyled = styled(Input)`
  flex: 2;
  border: none;
  font-size: 0.875rem !important;
  color: ${COLORS.purple} !important;
  height: 100%;
`;

export const InputIcon = styled(Icon)`
  max-height: 1.125rem
  width: auto;
  margin-right: 1rem;
  &:focus {
    outline: none;
  }
`;
