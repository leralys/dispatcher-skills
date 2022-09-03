import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';
import {
  CardSharedStyle,
  FlexColumn,
  FlexRow,
} from '../../styles/sharedStyles';

export const CardPrimaryStyled = styled(CardSharedStyle)`
  flex-direction: row;
  width: 100%;
  min-height: max(12.6vw, 15.125rem);
  margin-bottom: 1.5rem;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    flex-direction: column;
    height: 28.06rem;
  }
`;

export const CardImgContainer = styled.div`
  flex: 3;
  max-width: 18rem;
  min-height: 100%;
  @media only screen and (max-width: ${SCREENS.desktop}px) {
    max-width: 15.125rem;
  }

  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    max-width: 100%;
    min-height: 40%;
  }
  @media only screen and (max-width: ${SCREENS.breakpoint500}px) {
    max-width: 100%;
    min-height: 33%;
  }
`;

export const CardButtonContainer = styled(FlexRow)`
    max-height: 2.25rem;
    justify-content: flex-end;

    .MuiButton-root.MuiButton-contained {

    @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
      width: 100%;
    }
`;

export const ATagStyled = styled.a`
  font-size: inherit;
  color: ${COLORS.white};
  text-decoration: none;
  @media only screen and (max-width: 300px) {
    font-size: 0.75rem;
  }
`;

export const ArticleImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 0%;
  border-radius: 1.25rem 0 0 1.25rem;
  border-right: 1px solid ${COLORS.secondary};

  @media only screen and (max-width: ${SCREENS.breakpoint700}px) {
    border-radius: 1.25rem 1.25rem 0 0;
    object-position: 0% 25%;
  }
  @media only screen and (max-width: ${SCREENS.tabletM - 1}px) {
    border-bottom: 1px solid ${COLORS.secondary};
  }
`;

export const Article = styled(FlexColumn)<{ isRTL: boolean }>`
  flex: 3;
  min-height: 100%;
  align-items: space-between;
  justify-content: space-between;
  padding: 1rem;
  text-align: ${({ isRTL }) => isRTL && 'right'};

  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    padding-block: 0.59rem;
    min-height: 60%;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    padding-block: 0.59rem 1rem;
    min-height: 66%;
  }
`;

export const ArticleDetailes = styled.p`
  color: ${COLORS.purple};
  opacity: 0.5;
`;

export const ArticleTitle = styled.h6`
  color: ${COLORS.bluishBlack};
  font-size: 1.125rem;
`;

export const ArticleContent = styled.section`
  color: ${COLORS.purple};
  font-size: 0.875rem;
`;
