import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  status: yup.string().required(),
  patient_id: yup.string().nullable().required(),
  practice_id: yup.string().nullable().required(),
});
