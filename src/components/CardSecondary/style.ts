import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colors';
import {
  CardSharedStyle,
  FlexColumn,
  FlexRow,
} from '../../styles/sharedStyles';
import { CardProps } from './CardSecondary';

export const CardSecondaryStyled = styled(CardSharedStyle)`
  width: 100%;
  height: 19.69vw;
  flex-direction: column;
  justify-content: space-between;
  padding: 6.07% 4.5%;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
`;

export const TitleContainer = styled(FlexColumn)`
  margin-left: 1.6%;
`;

export const CardSecondaryTitle = styled.h5`
  font-size: clamp(1.25rem, 1.25vw, 1.5rem);
  color: ${COLORS.bluishBlack};
  margin-bottom: 0.4rem;
`;

export const Underline = styled.div`
  width: 1.25rem;
  height: 0.19rem;
  border-radius: 0.625rem;
  background: ${COLORS.purple};
`;

export const CardSecondaryBody = styled(FlexRow)`
  height: 100%;
  justify-content: ${(props: CardProps) =>
    props?.children?.props?.type === 'doughnut' ? 'space-between' : 'center'};
  align-items: ${(props: CardProps) =>
    props?.children?.props?.type === 'area' ? 'flex-end' : 'center'};
`;
