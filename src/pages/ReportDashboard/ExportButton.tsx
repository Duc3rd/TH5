import * as XLSX from 'xlsx';
import { Button } from 'antd';

const exportToExcel = (data, filename) => {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Danh sách thành viên');
  XLSX.writeFile(wb, `${filename}.xlsx`);
};

const ExportButton = ({ data }) => (
  <Button onClick={() => exportToExcel(data, 'DanhSachThanhVien')}>Xuất danh sách</Button>
);

export default ExportButton;
