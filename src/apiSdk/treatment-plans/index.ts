import axios from 'axios';
import queryString from 'query-string';
import { TreatmentPlanInterface, TreatmentPlanGetQueryInterface } from 'interfaces/treatment-plan';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTreatmentPlans = async (
  query?: TreatmentPlanGetQueryInterface,
): Promise<PaginatedInterface<TreatmentPlanInterface>> => {
  const response = await axios.get('/api/treatment-plans', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTreatmentPlan = async (treatmentPlan: TreatmentPlanInterface) => {
  const response = await axios.post('/api/treatment-plans', treatmentPlan);
  return response.data;
};

export const updateTreatmentPlanById = async (id: string, treatmentPlan: TreatmentPlanInterface) => {
  const response = await axios.put(`/api/treatment-plans/${id}`, treatmentPlan);
  return response.data;
};

export const getTreatmentPlanById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/treatment-plans/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTreatmentPlanById = async (id: string) => {
  const response = await axios.delete(`/api/treatment-plans/${id}`);
  return response.data;
};
