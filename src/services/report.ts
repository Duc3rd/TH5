import { getLocalData } from '@/utils/localStorageHelper';

export async function fetchReportData() {
  return {
    clubs: getLocalData('clubs').length,
    pendingApplications: getLocalData('applications').filter((app) => app.status === 'Pending').length,
    approvedApplications: getLocalData('applications').filter((app) => app.status === 'Approved').length,
    rejectedApplications: getLocalData('applications').filter((app) => app.status === 'Rejected').length,
    totalMembers: getLocalData('members').length,
  };
}
