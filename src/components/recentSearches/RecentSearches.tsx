import React from 'react';
import {
  clearSearchHistory,
  deleteFromSearchHistory,
  getSearchHistory,
} from '../../utils/localStorageUse';
import {
  SearchesContainer,
  SearchesHeader,
  SearchesTitle,
  SearchesList,
  SearchesItem,
  SearchesText,
  StyledClearIcon,
} from './styles';
import Button from '../button/MainButton';
import { MAX_AMOUNT_RECENT_SEARCHES } from '../../utils/constants/maxValues';

export interface RecentSearchesProps {
  history: string[];
  setHistory: React.Dispatch<React.SetStateAction<string[]>>;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const RecentSearches = ({
  history,
  setHistory,
  setInputValue,
}: RecentSearchesProps) => {
  const removeFromHistory = (e: React.SyntheticEvent, item: string) => {
    e.preventDefault();
    e.stopPropagation();
    deleteFromSearchHistory(item);
    setHistory(getSearchHistory());
  };
  const clearHistory = (e: React.SyntheticEvent) => {
    e.preventDefault();
    clearSearchHistory();
    setHistory(getSearchHistory());
  };
  const chooseRecentSearch = (e: React.SyntheticEvent, item: string) => {
    e.preventDefault();
    setInputValue(item);
  };
  return (
    <SearchesContainer>
      <SearchesHeader>
        <SearchesTitle>Recent searches</SearchesTitle>
        <Button onMouseDown={(e) => clearHistory(e)}>Clear</Button>
      </SearchesHeader>
      <SearchesList>
        {history.slice(0, MAX_AMOUNT_RECENT_SEARCHES).map((el) => (
          <SearchesItem key={el} onMouseDown={(e) => chooseRecentSearch(e, el)}>
            <SearchesText className='font-mulish'>{el}</SearchesText>
            <Button onMouseDown={(e) => removeFromHistory(e, el)}>
              <StyledClearIcon />
            </Button>
          </SearchesItem>
        ))}
      </SearchesList>
    </SearchesContainer>
  );
};

export default RecentSearches;
