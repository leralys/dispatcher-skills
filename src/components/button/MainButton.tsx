import React from 'react';
import { ButtonStyled } from './styles';
import arrowRight from '../../assets/svgs/arrowRight.svg';

export interface ButtonProps {
  icon?: boolean;
  children?: any;
  color?: 'primary' | 'secondary';
  onClick?: () => void;
  onMouseDown?: (...args: any) => void;
}

const MainButton = ({
  children,
  icon,
  color,
  onClick,
  onMouseDown,
}: ButtonProps) => {
  return (
    <ButtonStyled
      variant='contained'
      disableElevation
      endIcon={icon && <img src={arrowRight} alt='arrowRight' />}
      color={color}
      onClick={onClick}
      onMouseDown={onMouseDown}
    >
      {children}
    </ButtonStyled>
  );
};

export default MainButton;
