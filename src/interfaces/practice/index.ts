import { AppointmentInterface } from 'interfaces/appointment';
import { InventoryInterface } from 'interfaces/inventory';
import { PatientInterface } from 'interfaces/patient';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PracticeInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  appointment?: AppointmentInterface[];
  inventory?: InventoryInterface[];
  patient?: PatientInterface[];
  user?: UserInterface;
  _count?: {
    appointment?: number;
    inventory?: number;
    patient?: number;
  };
}

export interface PracticeGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  opening_hours?: string;
  closing_hours?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
