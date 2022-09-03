import styled from 'styled-components';
import { FlexColumn } from '../../../../styles/sharedStyles';
import { COLORS } from '../../../../utils/constants/colors';
import { SCREENS } from '../../../../utils/constants/screenSizes';

export const CardsContainer = styled(FlexColumn)`
  overflow-y: auto;
  width: 100%;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  // styles and show custom scrollbar for big screens
  @media only screen and (min-width: ${SCREENS.laptopM + 1}px) {
    width: 70.35%;
    padding-right: 0.93rem;

    ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: ${COLORS.greyPlaceholder};
      &:hover {
        background-color: rgba(160, 163, 189, 0.85);
      }
    }
    ::-webkit-scrollbar-track {
      visibility: hidden;
      margin: 0.25rem 0 1.5rem;
    }
  }
`;
