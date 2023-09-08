import * as yup from 'yup';

export const treatmentPlanValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  cost: yup.number().integer().required(),
  start_date: yup.date().required(),
  end_date: yup.date().nullable(),
  patient_id: yup.string().nullable().required(),
});
