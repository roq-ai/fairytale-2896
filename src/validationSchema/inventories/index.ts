import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  item_name: yup.string().required(),
  quantity: yup.number().integer().required(),
  reorder_level: yup.number().integer().required(),
  last_order_date: yup.date().nullable(),
  next_order_date: yup.date().nullable(),
  practice_id: yup.string().nullable().required(),
});
