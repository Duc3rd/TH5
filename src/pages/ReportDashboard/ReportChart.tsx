import { Column } from '@ant-design/charts';

const data = [
  { club: 'CLB A', status: 'Pending', count: 10 },
  { club: 'CLB A', status: 'Approved', count: 15 },
  { club: 'CLB A', status: 'Rejected', count: 5 },
  { club: 'CLB B', status: 'Pending', count: 7 },
  { club: 'CLB B', status: 'Approved', count: 20 },
  { club: 'CLB B', status: 'Rejected', count: 3 },
];

const config = {
  data,
  isGroup: true,
  xField: 'club',
  yField: 'count',
  seriesField: 'status',
};

const ReportChart = () => <Column {...config} />;
export default ReportChart;
