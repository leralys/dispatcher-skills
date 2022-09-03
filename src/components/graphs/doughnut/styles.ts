import styled from 'styled-components';
import { FlexRow, FlexColumn } from '../../../styles/sharedStyles';
import { COLORS } from '../../../utils/constants/colors';
import { SCREENS } from '../../../utils/constants/screenSizes';

interface liProps {
  color: string;
}

export const StyledUL = styled(FlexColumn)`
  list-style: none;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  margin-block: 1em 0;
  max-height: 5.5rem;
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background: ${COLORS.lightGrey};
    visibility: hidden;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.purple};
    border-radius: 5px;
    opacity: 1;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.greyPlaceholder};

  @media only screen and (max-width: ${SCREENS.laptopM}px) {
    display: none;
  }

  @media only screen and (max-width: 1650px) {
    max-height: 3.8rem;
  }

  @media only screen and (min-width: ${SCREENS.desktop}px) {
    margin-block: -0.625rem 0;
    max-height: 6.8rem;
  }
`;

export const StyledLI = styled(FlexRow)`
  padding: 0 1rem 0 1.5rem;
  margin-bottom: 0.69rem;
  &:before {
    width: 2em;
    content: '●';
    color: ${(props: liProps) => props.color};
    display: inline-block;
    margin-left: -0.5em;
  }
`;

export const StyledListContainer = styled(FlexRow)`
  font-size: 0.93rem;
  justify-content: space-between;
`;

export const GreySpan = styled.span`
  color: ${COLORS.doughnutGrey};
  font-size: 0.93rem;
  font-weight: 400;
`;
export const BlueSpan = styled.span`
  color: ${COLORS.bluishBlack};
  font-size: 0.875rem;
  font-weight: 400;
`;
