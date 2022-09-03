import axios from '../axios/config';
import { IFilterState } from '../store/slices/filterSlice';
import { ENDPOINTS } from '../utils/constants/endpoints';

const buildAxiosParams = (
  params: IFilterState,
  page: number,
  pageSize: number = 10
) => {
  const { endpoint, sources, country, category, q, to, sortBy, language } =
    params;
  let paramsObj;

  if (endpoint === ENDPOINTS.TOP && sources === '') {
    paramsObj = { country, category, q };
  } else if (endpoint === ENDPOINTS.TOP && sources !== '') {
    paramsObj = { sources, q };
  } else {
    paramsObj = { q, sources, to, sortBy, language };
  }
  paramsObj = {
    ...paramsObj,
    pageSize: pageSize.toString(),
    page: page.toString(),
  };
  const searchParams = new URLSearchParams(paramsObj);
  return searchParams;
};

export const fetchNewsData = async (state: IFilterState, page: number = 1) => {
  const { endpoint } = state;
  const params = buildAxiosParams(state, page);
  const res = await axios.get(`/${endpoint}`, { params });
  if (res.status === 200) return res;
  else throw new Error('Could not fetch news');
};

export const fetchSourcesData = async () => {
  const res = await axios.get(`/${ENDPOINTS.TOP}/sources`);
  if (res.status === 200) return res;
  else throw new Error('Could not fetch sources');
};
