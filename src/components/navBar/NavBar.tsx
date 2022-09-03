import React from 'react';
import SearchBox from '../search/SearchBox';
import Logo from '../logo/Logo';
import { StyledNav, LogoBox } from './styles';

const NavBar: React.FC = () => {
  return (
    <StyledNav>
      <LogoBox>
        <Logo />
      </LogoBox>
      <SearchBox />
    </StyledNav>
  );
};

export default NavBar;
