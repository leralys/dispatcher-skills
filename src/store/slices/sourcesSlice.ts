import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AsyncThunk,
} from '@reduxjs/toolkit';
import { IResponseSources } from '../../utils/types/APITypes';
import { fetchSourcesData } from '../../services/newsApiService';

const initialState: IResponseSources = {
  status: 'idle',
  sources: [],
};

export const fetchSources: AsyncThunk<any, void, {}> = createAsyncThunk(
  'sources/fetchSources',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchSourcesData();
      return response.data;
    } catch (err) {
      return rejectWithValue(JSON.stringify(err));
    }
  }
);

export const sourcesSlice = createSlice({
  name: 'sources',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSources.pending.type]: (state) => {
      state.status = 'loading';
    },
    [fetchSources.fulfilled.type]: (
      state,
      action: PayloadAction<IResponseSources>
    ) => {
      state.status = action.payload.status;
      state.sources = [...state.sources, ...action.payload.sources];
    },
    [fetchSources.rejected.type]: (state) => {
      state.status = 'error';
    },
  },
});

export const sourcesActions = sourcesSlice.actions;

export default sourcesSlice.reducer;
