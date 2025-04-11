import { Column } from '@ant-design/charts';
import { getLocalData } from '@/utils/localStorageHelper';

const ReportChart = () => {
  const applications = getLocalData('applications');
  const clubCounts = getLocalData('clubs').map(club => ({
    club: club.name,
    pending: applications.filter(app => app.clubId === club.id && app.status === 'Pending').length,
    approved: applications.filter(app => app.clubId === club.id && app.status === 'Approved').length,
    rejected: applications.filter(app => app.clubId === club.id && app.status === 'Rejected').length,
  }));

  const data = clubCounts.flatMap(({ club, pending, approved, rejected }) => [
    { club, status: 'Pending', count: pending },
    { club, status: 'Approved', count: approved },
    { club, status: 'Rejected', count: rejected },
  ]);

  return <Column data={data} xField="club" yField="count" seriesField="status" isGroup />;
};

export default ReportChart;
