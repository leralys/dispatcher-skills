import React from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import logoSvg from '../../assets/svgs/logo.svg';
import { LogoContainer, LogoImg } from './style';
import { SCREENS } from '../../utils/constants/screenSizes';

export interface LogoProps {
  height?: number;
}

const Logo = ({ height }: LogoProps) => {
  const { width } = useWindowSize();
  const { laptopM } = SCREENS;
  const scrollToTop = () => {
    if (width > laptopM) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <LogoContainer height={height}>
      <LogoImg src={logoSvg} alt='logo' onClick={scrollToTop} />
    </LogoContainer>
  );
};

export default Logo;
