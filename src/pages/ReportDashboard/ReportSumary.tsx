import { Statistic, Card, Row, Col } from 'antd';

const ReportSummary = () => {
  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card>
          <Statistic title="Tổng số CLB" value={10} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Đơn đăng ký chờ duyệt" value={5} />
        </Card>
      </Col>
      <Col span={8}>
        <Card>
          <Statistic title="Đơn đăng ký bị từ chối" value={2} />
        </Card>
      </Col>
    </Row>
  );
};

export default ReportSummary;
