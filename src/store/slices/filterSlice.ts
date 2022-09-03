import { RootState } from '../store';
import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  AsyncThunk,
} from '@reduxjs/toolkit';
import { getIP } from '../../services/IPAddressService';
import { findCountryById } from '../../utils/findCountryById';
import defaultCountry from '../../utils/constants/defaultCountry';

export interface IFilterState {
  [key: string]: string;
  country: string;
  endpoint: string;
  q: string;
  to: string;
  language: string;
  sortBy: string;
  category: string;
  sources: string;
}

interface FilterItemPayload {
  key: string;
  value: string;
}

const initialState: IFilterState = {
  country: '',
  endpoint: 'top-headlines',
  q: '',
  to: '',
  language: '',
  sortBy: '',
  category: '',
  sources: '',
};

export const getIPAddress: AsyncThunk<any, void, { state: RootState }> =
  createAsyncThunk('filter/getIPAddress', async (_, { rejectWithValue }) => {
    try {
      const response = await getIP();
      const countryId = response.country_code.toLowerCase();
      return findCountryById(countryId).id;
    } catch (err) {
      return rejectWithValue(JSON.stringify(err));
    }
  });

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    updateFilter: (state, action: PayloadAction<FilterItemPayload>) => {
      state[action.payload.key] = action.payload.value;
    },
    setQuery(state, action: PayloadAction<string>) {
      state.q = action.payload;
    },
    setEndpoint(state, action: PayloadAction<FilterItemPayload>) {
      state[action.payload.key] = action.payload.value;
      state.country = '';
      state.to = '';
      state.language = '';
      state.sortBy = '';
      state.category = '';
    },
  },
  extraReducers: {
    [getIPAddress.fulfilled.type]: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    [getIPAddress.rejected.type]: (state) => {
      state.country = defaultCountry.id;
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
