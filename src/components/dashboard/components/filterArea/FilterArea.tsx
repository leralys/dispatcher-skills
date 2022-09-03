import React, { useState } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import useWindowSize from '../../../../hooks/useWindowSize';
import { Snackbar, Alert } from '@mui/material';
import { AlertClearIcon } from './styles';
import Dropdown from '../../../dropdown/Dropdown';
import DatePickerComponent from '../../../datePicker/DatePickerComponent';
import { FilterDiv } from './styles';
import {
  topFilters,
  everythingFilters,
  endpointsFilters,
} from '../../../../utils/constants/filterStrings';
import { ENDPOINTS } from '../../../../utils/constants/endpoints';
import { SCREENS } from '../../../../utils/constants/screenSizes';
import { COLORS } from '../../../../utils/constants/colors';

const FilterArea = () => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const sources = useAppSelector((state) => state.sources.sources);
  const endpoint = useAppSelector((state) => state.filters.endpoint);
  const { width } = useWindowSize();
  const { tabletM } = SCREENS;
  const datesFilterId = everythingFilters[1].filter.id;

  const alertMessageEverything =
    'Please search for something or choose a source';

  const handleCloseAlert = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      setOpenAlert(false);
    }
    setOpenAlert(false);
  };

  const endpointDropdows = (
    <Dropdown
      options={endpointsFilters.options}
      placeholder={endpointsFilters.options[0].name}
      filtertype={endpointsFilters.filter.id}
    />
  );

  const topDropdowns = topFilters.map((item, index) => (
    <Dropdown
      key={item.filter.id}
      options={item?.options || sources}
      placeholder={item.filter.name}
      filtertype={item.filter.id}
      setOpenAlert={setOpenAlert}
    />
  ));

  const everythingDropdowns = everythingFilters.map((item) =>
    item.filter.id !== datesFilterId ? (
      <Dropdown
        key={item.filter.id}
        options={item?.options || sources}
        placeholder={item.filter.name}
        filtertype={item.filter.id}
        setOpenAlert={setOpenAlert}
      />
    ) : (
      <DatePickerComponent
        key={item.filter.id}
        filtertype={item.filter.id}
        setOpenAlert={setOpenAlert}
      />
    )
  );

  return (
    <FilterDiv>
      {width <= tabletM && endpointDropdows}
      {endpoint === ENDPOINTS.TOP ? topDropdowns : everythingDropdowns}
      <Snackbar
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert sx={{ background: `${COLORS.white}` }}>
          {alertMessageEverything}
          <AlertClearIcon onClick={() => setOpenAlert(false)} />
        </Alert>
      </Snackbar>
    </FilterDiv>
  );
};

export default FilterArea;
