export interface Internship {
  id: string;
  company_id: string;
  student_id: string;
  salary: number;
  workload: string;
  start_date: string;
  end_date: string | null;
  created_at: string;
  updated_at: string;
}
