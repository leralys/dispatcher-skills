import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts';
import { COLORS } from '../../../utils/constants/colors';
import { IGraphItem } from '../../../utils/prepareGraphData';

interface AreaProps {
  data: IGraphItem[];
}

const AreaChartGraph = ({ data }: AreaProps) => {
  return (
    <ResponsiveContainer width='100%' height='95%'>
      <AreaChart
        data={data}
        margin={{
          top: 30,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id='gradient' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0.326' stopColor={COLORS.primary} />
            <stop
              offset='1.035'
              stopColor={COLORS.areaChartBlue}
              stopOpacity='0'
            />
          </linearGradient>
        </defs>
        <XAxis
          dataKey='name'
          axisLine={false}
          tickLine={false}
          scale='point'
          stroke={COLORS.purple}
          interval='preserveStartEnd'
        />
        <Area
          type='monotone'
          dataKey='value'
          strokeWidth={4}
          stroke={COLORS.primary}
          fillOpacity={0.15}
          fill='url(#gradient)'
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartGraph;
