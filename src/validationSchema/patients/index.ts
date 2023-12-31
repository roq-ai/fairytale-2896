import * as yup from 'yup';

export const patientValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  dob: yup.date().required(),
  gender: yup.string().required(),
  phone_number: yup.string().nullable(),
  address: yup.string().nullable(),
  practice_id: yup.string().nullable().required(),
});
