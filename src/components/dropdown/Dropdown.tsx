import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchNews, newsActions } from '../../store/slices/newsSlice';
import { filterActions } from '../../store/slices/filterSlice';
import { SelectOption } from '@mui/base/SelectUnstyled';
import { CustomSelect, StyledOption, DropdownContainer } from './styles';
import { ENDPOINTS } from '../../utils/constants/endpoints';

export interface IOption {
  name: string;
  id: string;
}

export interface DropdownProps {
  placeholder: string;
  options: IOption[];
  insearchbox?: any;
  filtertype: string;
  setOpenAlert?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropwdown = ({
  placeholder,
  options,
  insearchbox,
  filtertype,
  setOpenAlert,
}: DropdownProps) => {
  const [selectedFilterValue, setSelectedFilterValue] =
    useState<IOption | null>(null);
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const hasSearched = useAppSelector((state) => state.news.hasSearched);

  const performFilterActions = (id: string) => {
    dispatch(
      filterActions.updateFilter({
        key: filtertype,
        value: id,
      })
    );
    if (
      setOpenAlert &&
      filters.endpoint === ENDPOINTS.EVERYTHING &&
      filters.q === '' &&
      filters.sources === '' &&
      filtertype !== 'sources'
    ) {
      setOpenAlert(true);
    }
    dispatch(fetchNews());
    if (!hasSearched) {
      dispatch(newsActions.setHasSearched());
    }
  };

  const performEndpointActions = (id: string) => {
    dispatch(filterActions.setEndpoint({ key: filtertype, value: id }));
    dispatch(fetchNews());
    if (!hasSearched) {
      dispatch(newsActions.setHasSearched());
    }
  };

  const handleFilterChange = (newValue: IOption | null) => {
    if (newValue) {
      setSelectedFilterValue(newValue);
      if (filtertype === 'endpoint') {
        performEndpointActions(newValue.id);
      } else {
        performFilterActions(newValue.id);
      }
    }
  };

  const handleUnselectFilter = (id: string) => {
    if (selectedFilterValue && id === selectedFilterValue.id && !insearchbox) {
      setSelectedFilterValue(null);
      dispatch(filterActions.updateFilter({ key: filtertype, value: '' }));
      dispatch(fetchNews());
      if (!hasSearched) {
        dispatch(newsActions.setHasSearched());
      }
    }
  };

  return (
    <DropdownContainer
      options={options}
      insearchbox={insearchbox ? insearchbox.toString() : undefined}
      filtertype={filtertype}
      placeholder={placeholder}
      filters={filters}
      className={filtertype}
    >
      <CustomSelect
        value={selectedFilterValue}
        onChange={handleFilterChange}
        renderValue={(item: SelectOption<IOption> | null) =>
          item != null ? item.label : placeholder
        }
        componentsProps={{
          popper: {
            placement: 'bottom',
            popperOptions: { placement: 'bottom' },
          },
        }}
      >
        {options.map((option) => (
          <div key={option.id} onClick={() => handleUnselectFilter(option.id)}>
            <StyledOption value={option} className='font-mulish'>
              {option.name}
            </StyledOption>
          </div>
        ))}
      </CustomSelect>
    </DropdownContainer>
  );
};

export default Dropwdown;
