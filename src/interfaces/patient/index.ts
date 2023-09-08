import { AppointmentInterface } from 'interfaces/appointment';
import { TreatmentPlanInterface } from 'interfaces/treatment-plan';
import { PracticeInterface } from 'interfaces/practice';
import { GetQueryInterface } from 'interfaces';

export interface PatientInterface {
  id?: string;
  first_name: string;
  last_name: string;
  dob: any;
  gender: string;
  phone_number?: string;
  address?: string;
  practice_id: string;
  created_at?: any;
  updated_at?: any;
  appointment?: AppointmentInterface[];
  treatment_plan?: TreatmentPlanInterface[];
  practice?: PracticeInterface;
  _count?: {
    appointment?: number;
    treatment_plan?: number;
  };
}

export interface PatientGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  gender?: string;
  phone_number?: string;
  address?: string;
  practice_id?: string;
}
