export interface Internship {
  id: string;
  companyId: string;
  studentId: string;
  salary: number;
  workload: string;
  startDate: string;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
}
