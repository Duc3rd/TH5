import React from 'react';
import { Card } from 'antd';
import ReportSummary from './ReportSummary';
import ReportChart from './ReportChart';
import ExportButton from './ExportButton';

const ReportDashboard = () => {
  const mockData = [
    { name: 'Nguyễn Văn A', email: 'a@gmail.com', club: 'CLB A' },
    { name: 'Trần Thị B', email: 'b@gmail.com', club: 'CLB B' },
    // Thêm dữ liệu mẫu
  ];

  return (
    <div style={{ padding: 20 }}>
      <Card title="Thống kê tổng quan">
        <ReportSummary />
      </Card>
      <Card title="Biểu đồ đơn đăng ký theo câu lạc bộ" style={{ marginTop: 20 }}>
        <ReportChart />
      </Card>
      <Card title="Xuất danh sách thành viên" style={{ marginTop: 20 }}>
        <ExportButton data={mockData} />
      </Card>
    </div>
  );
};

export default ReportDashboard;
