import { topFilters } from '../utils/constants/filterStrings';
import { IOption } from '../components/dropdown/Dropdown';
import defaultCountry from './constants/defaultCountry';

const countries = topFilters[0].options;

export const findCountryById = (id: string): IOption => {
  const foundCountry = countries?.find((country) => country.id === id);
  return foundCountry ? foundCountry : defaultCountry;
};
