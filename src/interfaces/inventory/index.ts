import { PracticeInterface } from 'interfaces/practice';
import { GetQueryInterface } from 'interfaces';

export interface InventoryInterface {
  id?: string;
  item_name: string;
  quantity: number;
  reorder_level: number;
  last_order_date?: any;
  next_order_date?: any;
  practice_id: string;
  created_at?: any;
  updated_at?: any;

  practice?: PracticeInterface;
  _count?: {};
}

export interface InventoryGetQueryInterface extends GetQueryInterface {
  id?: string;
  item_name?: string;
  practice_id?: string;
}
