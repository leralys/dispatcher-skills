import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchNews } from '../../store/slices/newsSlice';
import { fetchSources } from '../../store/slices/sourcesSlice';
import { DashboardContainer, DashboardContent, MainContent } from './styles';
import FilterArea from './components/filterArea/FilterArea';
import NavBar from '../navBar/NavBar';
import NewsWidget from './components/newsWidget/NewsWidget';
import GraphsArea from './components/graphsArea/GraphsArea';
import PageTitle from '../pageTitle/PageTitle';
import useWindowSize from '../../hooks/useWindowSize';
import { SCREENS } from '../../utils/constants/screenSizes';

const Dashboard = () => {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const country = useAppSelector((state) => state.filters.country);
  const { width, height } = useWindowSize();
  const { laptopM } = SCREENS;

  useEffect(() => {
    dispatch(fetchSources());
  }, [dispatch]);

  useEffect(() => {
    if (country && isFirstVisit) {
      dispatch(fetchNews());
      setIsFirstVisit(false);
    }
  }, [dispatch, country, isFirstVisit]);
  return (
    <DashboardContainer>
      <NavBar />
      <DashboardContent>
        <FilterArea />
        <PageTitle />
        <MainContent isPortrait={height > width ? true : false}>
          <NewsWidget />
          {width > laptopM && <GraphsArea />}
        </MainContent>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;
