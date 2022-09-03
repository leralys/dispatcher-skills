import styled from 'styled-components';
import { COLORS } from '../utils/constants/colors';

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const CardSharedStyle = styled.div`
  display: flex;
  border-radius: 1.25rem;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.secondary};
`;

// shared strings of styles

export const filterSharedStyles = `
  font-size: 0.875rem;
  background: ${COLORS.white};
  border: none;
  cursor: pointer;
  color: ${COLORS.purple};
`;

export const dropdownSharedStyles = `
  font-size: 0.75rem;
  background: ${COLORS.white};
  border-radius: 0.625rem;
  color: ${COLORS.purple};
  overflow: overlay;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
`;
