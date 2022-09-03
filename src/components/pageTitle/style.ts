import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';
import { TitleProps } from './PageTitle';
import { FlexRow } from '../../styles/sharedStyles';

export const TitleStyled = styled(FlexRow)`
  ${({ firstVisit }: TitleProps) => `
    opacity: ${firstVisit ? '1' : '0.5'};
    color: ${firstVisit ? COLORS.bluishBlack : COLORS.purple};
    font-size: ${firstVisit ? 1.5 : 0.875}rem;
    padding-block: 0.85em;

    @media only screen and (max-width: ${SCREENS.tabletM}px) {
      padding-block: 0.5em;
    }

    @media only screen and (max-width: 300px) {
      font-size: 0.75rem;
    }
  `}
`;
