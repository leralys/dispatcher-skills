import { useAppSelector } from '../../../store/hooks';
import {
  prepareDoughnutData,
  prepareAreaChartData,
} from '../../../utils/prepareGraphData';
import AreaChartGraph from '../areaChart/AreaChartGraph';
import DoughnutGraph from '../doughnut/DoughnutGraph';

export interface GraphProps {
  type: string;
}

const Graph = ({ type }: GraphProps) => {
  const articles = useAppSelector((state) => state.news.articles);
  return (
    <>
      {type === 'area' ? (
        <AreaChartGraph
          data={articles.length ? prepareAreaChartData(articles) : []}
        />
      ) : (
        <DoughnutGraph
          data={articles.length ? prepareDoughnutData(articles) : []}
        />
      )}
    </>
  );
};

export default Graph;
