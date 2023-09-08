import { PatientInterface } from 'interfaces/patient';
import { GetQueryInterface } from 'interfaces';

export interface TreatmentPlanInterface {
  id?: string;
  name: string;
  description?: string;
  cost: number;
  start_date: any;
  end_date?: any;
  patient_id: string;
  created_at?: any;
  updated_at?: any;

  patient?: PatientInterface;
  _count?: {};
}

export interface TreatmentPlanGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  patient_id?: string;
}
