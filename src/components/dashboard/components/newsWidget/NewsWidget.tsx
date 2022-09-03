import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { newsActions, scrollNews } from '../../../../store/slices/newsSlice';
import { IArticle } from '../../../../utils/types/APITypes';
import InfiniteScroll from 'react-infinite-scroll-component';
import CardPrimary from '../../../cardPrimary/CardPrimary';
import SkeletonCardList from '../../../skeletons/SkeletonCardList';
import NoData from '../../../noData/NoData';
import { CardsContainer } from './styles';
import { RESPONSES } from '../../../../utils/constants/responseStatus';
import { MAX_NUM_PAGE } from '../../../../utils/constants/maxValues';

const NewsWidget = () => {
  const dispatch = useAppDispatch();
  const { articles, totalResults, hasMore, page, status, hasSearched } =
    useAppSelector((state) => state.news);

  const getMoreData = () => {
    if (hasMore && page < MAX_NUM_PAGE) {
      dispatch(newsActions.incrementPage());
      dispatch(scrollNews());
      const isMore = articles.length < totalResults && page < MAX_NUM_PAGE;
      dispatch(newsActions.setHasMore(isMore));
      if (!hasSearched) {
        dispatch(newsActions.setHasSearched());
      }
    }
  };
  return (
    <CardsContainer id='scrollableDiv'>
      {status === RESPONSES.LOADING && <SkeletonCardList />}
      {totalResults > 0 && (
        <InfiniteScroll
          dataLength={articles.length}
          next={getMoreData}
          hasMore={articles.length < totalResults && page < MAX_NUM_PAGE}
          loader={null}
          scrollableTarget='scrollableDiv'
        >
          {articles.map((article: IArticle, index: number) => (
            <CardPrimary
              key={`${index}-${article.title}`}
              urlToImage={article.urlToImage}
              title={article.title}
              publishedAt={article.publishedAt}
              source={article.source}
              content={article.content}
              author={article.author}
              description={article.description}
              url={article.url}
            />
          ))}
        </InfiniteScroll>
      )}
      {totalResults === 0 && <NoData type='search' />}
    </CardsContainer>
  );
};
export default NewsWidget;
