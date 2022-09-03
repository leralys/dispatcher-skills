import { configureStore } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import filterSlice from './slices/filterSlice';
import sourcesSlice from './slices/sourcesSlice';

const store = configureStore({
  reducer: { filters: filterSlice, news: newsSlice, sources: sourcesSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
