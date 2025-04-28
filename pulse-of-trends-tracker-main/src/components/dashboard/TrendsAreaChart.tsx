
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface TimeSeriesData {
  date: string;
  trends: number;
}

interface TrendsAreaChartProps {
  data: TimeSeriesData[];
}

const TrendsAreaChart = ({ data }: TrendsAreaChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300} className="trend-chart">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date" 
          tickFormatter={(date) => {
            const d = new Date(date);
            return `${d.getDate()}/${d.getMonth() + 1}`;
          }}
        />
        <YAxis />
        <Tooltip 
          formatter={(value) => [`${value} trends`, "Total Trends"]}
          labelFormatter={(date) => {
            const d = new Date(date);
            return `${d.toLocaleDateString()}`;
          }}
        />
        <Area 
          type="monotone" 
          dataKey="trends" 
          stroke="#0EA5E9" 
          fill="#0EA5E9" 
          fillOpacity={0.2} 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default TrendsAreaChart;
