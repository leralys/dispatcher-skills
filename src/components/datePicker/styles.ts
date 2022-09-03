import styled from 'styled-components';
import { ReactComponent as DateIcon } from '../../assets/svgs/date.svg';
import { FlexRow } from '../../styles/sharedStyles';
import { filterSharedStyles } from '../../styles/sharedStyles';
import { SCREENS } from '../../utils/constants/screenSizes';

export const DatesFilterContainer = styled(FlexRow)`
  ${filterSharedStyles}
  height: 2.94rem;
  width: 10.93rem;
  border-radius: 0.625rem;
  padding: 0.93em;
  align-items: center;
  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const DateIconStyled = styled(DateIcon)`
  min-height: 1rem;
  min-width: 1rem;
`;
