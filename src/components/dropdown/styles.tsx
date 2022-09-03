import React from 'react';
import { IFilterState } from '../../store/slices/filterSlice';
import SelectUnstyled, {
  SelectUnstyledProps,
  selectUnstyledClasses,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import { COLORS } from '../../utils/constants/colors';
import { SCREENS } from '../../utils/constants/screenSizes';
import dropdownArrow from '../../assets/svgs/dropdownArrow.svg';
import { DropdownProps } from './Dropdown';
import {
  filterSharedStyles,
  dropdownSharedStyles,
} from '../../styles/sharedStyles';

interface DropdownContainerProps extends DropdownProps {
  filters: IFilterState;
}

const disabledStyle = `
  pointer-events: none;
  opacity: 0.5;
`;

export const DropdownContainer = styled('div')`
  ${({ insearchbox, filters }: DropdownContainerProps) => `
    min-width: ${insearchbox ? 'fit-content' : '10.93rem'};
    width: fit-content;
    height: 2.94rem;
    font-weight: ${insearchbox ? 500 : 400};
    border-radius: ${!insearchbox && '0.625rem'};
    margin-right: ${insearchbox && 0.625}rem;
    border-left: ${insearchbox && `1px solid ${COLORS.lightPurple}`};
    &.country, &.category{
      ${filters.sources !== '' && disabledStyle}
    }
    &.sources{
      ${filters.category !== '' || filters.country !== '' ? disabledStyle : ''}
    }
    @media only screen and (max-width: ${SCREENS.tabletM}px) {
      width: 100%;
    }
  `}
`;

const StyledButton = styled('button')`
  ${filterSharedStyles};
  font-weight: inherit;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  padding: 0.93em;
  text-align: left;

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${COLORS.secondary};
  }
  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url(${dropdownArrow});
      transform: rotate(180deg);
    }
  }
  &::after {
    content: url(${dropdownArrow});
    float: right;
    transition: transform 0.3s ease-out;
    margin-left: 1rem;
  }
`;

const StyledListbox = styled('ul')`
  ${dropdownSharedStyles}
  padding: 0.45em 0;
  margin: 0.5em 0;
  min-width: 10.93rem;
  max-height: 10.5em;
  outline: 0px;
  background: ${COLORS.white};
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-track {
    background: ${COLORS.lightGrey};
    visibility: hidden;
    border-radius: 5px;
    margin: 0.5em 0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${COLORS.purple};
    border-radius: 5px;
    opacity: 1;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${COLORS.greyPlaceholder};
  }
  @media only screen and (max-width: ${SCREENS.tabletM}px) {
    width: 29.8vw;
  }
  @media only screen and (max-width: ${SCREENS.mobileL}px) {
    width: 91vw;
  }
`;

export const StyledOption = styled(OptionUnstyled)`
  font-size: 0.75rem;
  list-style: none;
  padding: 8px;
  cursor: pointer;
  letter-spacing: 0.3px;
  color: ${COLORS.purple};
  padding: 1em;
  line-height: 1rem;
  &:last-of-type {
    border-bottom: none;
  }
  &:hover:not(.${optionUnstyledClasses.selected}) {
    color: ${COLORS.bluishBlack};
    background: ${COLORS.lightPurple};
  }
  &.${optionUnstyledClasses.highlighted} {
    background: ${COLORS.lightPurple};
  }
  &.${optionUnstyledClasses.disabled} {
    color: ${COLORS.secondary};
  }
  &.${optionUnstyledClasses.selected} {
    background: ${COLORS.lightPurple};
  }
  &.${optionUnstyledClasses.disabled} {
    color: ${COLORS.purple};
  }
`;

const StyledPopper = styled(PopperUnstyled)`
  z-index: 2;
`;

export function CustomSelect<TValue extends {}>(
  props: SelectUnstyledProps<TValue>
) {
  const components: SelectUnstyledProps<TValue>['components'] = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} components={components} />;
}
