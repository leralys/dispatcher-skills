import { Input } from '@mui/material';
import { ReactComponent as Icon } from '../../assets/svgs/inputIcon.svg';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants/colors';

export const InputStyled = styled(Input)`
  flex: 2;
  border: none;
  font-size: 0.875rem !important;
  color: ${COLORS.purple} !important;
  height: 100%;
`;

export const InputIcon = styled(Icon)`
  margin-right: 1rem;
`;
