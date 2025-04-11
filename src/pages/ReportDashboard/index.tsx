import { useEffect, useState } from 'react';
import { Card } from 'antd';
import { fetchReportData } from '@/services/report';
import ReportSummary from '@/components/ReportSummary';
import ReportChart from '@/components/ReportChart';
import ExportButton from '@/components/ExportButton';

const ReportDashboard = () => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    fetchReportData().then(setReportData);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Card title="Thống kê tổng quan">
        {reportData && <ReportSummary data={reportData} />}
      </Card>
      <Card title="Biểu đồ đơn đăng ký theo câu lạc bộ" style={{ marginTop: 20 }}>
        <ReportChart />
      </Card>
      <Card title="Xuất danh sách thành viên" style={{ marginTop: 20 }}>
        <ExportButton />
      </Card>
    </div>
  );
};

export default ReportDashboard;
