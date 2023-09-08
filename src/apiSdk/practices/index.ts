import axios from 'axios';
import queryString from 'query-string';
import { PracticeInterface, PracticeGetQueryInterface } from 'interfaces/practice';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPractices = async (
  query?: PracticeGetQueryInterface,
): Promise<PaginatedInterface<PracticeInterface>> => {
  const response = await axios.get('/api/practices', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPractice = async (practice: PracticeInterface) => {
  const response = await axios.post('/api/practices', practice);
  return response.data;
};

export const updatePracticeById = async (id: string, practice: PracticeInterface) => {
  const response = await axios.put(`/api/practices/${id}`, practice);
  return response.data;
};

export const getPracticeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/practices/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePracticeById = async (id: string) => {
  const response = await axios.delete(`/api/practices/${id}`);
  return response.data;
};
