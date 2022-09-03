import { RootState } from '../store';
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  AsyncThunk,
} from '@reduxjs/toolkit';
import { IResponseNews } from '../../utils/types/APITypes';
import { fetchNewsData } from '../../services/newsApiService';
import { RESPONSES } from '../../utils/constants/responseStatus';

interface INewsState extends IResponseNews {
  page: number;
  hasMore: boolean;
  hasSearched: boolean;
}

const initialState: INewsState = {
  status: RESPONSES.IDLE,
  totalResults: -1,
  articles: [],
  page: 1,
  hasMore: true,
  hasSearched: false,
};

export const fetchNews: AsyncThunk<any, void, { state: RootState }> =
  createAsyncThunk(
    'news/fetchNews',
    async (_, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const filters = state.filters;
      try {
        const response = await fetchNewsData(filters);
        return response.data;
      } catch (err) {
        return rejectWithValue(JSON.stringify(err));
      }
    },
    {
      condition: (_, { getState }) => {
        const state = getState() as RootState;
        const { country, category, q, sources } = state.filters;
        if (country === '' && category === '' && q === '' && sources === '') {
          return false;
        }
      },
    }
  );

export const scrollNews: AsyncThunk<any, void, { state: RootState }> =
  createAsyncThunk(
    'news/scrollNews',
    async (_, { rejectWithValue, getState }) => {
      const state = getState() as RootState;
      const filters = state.filters;
      const page = state.news.page;
      try {
        const response = await fetchNewsData(filters, page);
        return response.data;
      } catch (err) {
        return rejectWithValue(JSON.stringify(err));
      }
    }
  );

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page = state.page + 1;
    },
    setHasMore(state, action: PayloadAction<boolean>) {
      state.hasMore = action.payload;
    },
    setHasSearched(state) {
      const updateState = { ...state, hasSearched: true };
      return updateState;
    },
  },
  extraReducers: {
    [fetchNews.pending.type]: (state) => {
      state.status = RESPONSES.LOADING;
    },
    [fetchNews.fulfilled.type]: (
      state,
      action: PayloadAction<IResponseNews>
    ) => {
      state.status = action.payload.status;
      state.totalResults = action.payload.totalResults;
      state.articles = action.payload.articles;
    },
    [fetchNews.rejected.type]: (state) => {
      state.status = RESPONSES.ERROR;
    },
    [scrollNews.pending.type]: (state) => {
      state.status = RESPONSES.LOADING;
    },
    [scrollNews.fulfilled.type]: (
      state,
      action: PayloadAction<IResponseNews>
    ) => {
      state.status = action.payload.status;
      state.totalResults = action.payload.totalResults;
      state.articles = [...state.articles, ...action.payload.articles];
    },
    [scrollNews.rejected.type]: (state) => {
      state.status = RESPONSES.ERROR;
    },
  },
});

export const newsActions = newsSlice.actions;

export default newsSlice.reducer;
