import React from 'react';
import { InputAdornment } from '@mui/material';
import { InputStyled, InputIcon } from './styles';

const InputComponent: React.FC = () => {
  return (
    <InputStyled
      startAdornment={
        <InputAdornment position='start'>
          <InputIcon />
        </InputAdornment>
      }
      placeholder='Search'
      disableUnderline
    />
  );
};

export default InputComponent;
