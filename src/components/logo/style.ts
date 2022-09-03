import styled from 'styled-components';
import { LogoProps } from './Logo';

export const LogoContainer = styled.div`
  ${({ height }: LogoProps) => `
  height: ${height ? height : 3.125}rem;
  width: fit-content;
  `}
`;

export const LogoImg = styled.img`
  height: 100%;
  width: auto;
`;
