import React from 'react';
import {
  TitleContainer,
  Underline,
  CardSecondaryStyled,
  CardSecondaryTitle,
  CardSecondaryBody,
} from './style';

export interface CardProps {
  children?: any;
  title?: string;
}

const CardSecondary = ({ children, title }: CardProps) => {
  return (
    <CardSecondaryStyled>
      <TitleContainer>
        <CardSecondaryTitle>{title}</CardSecondaryTitle>
        <Underline />
      </TitleContainer>
      <CardSecondaryBody>{children}</CardSecondaryBody>
    </CardSecondaryStyled>
  );
};

export default CardSecondary;
