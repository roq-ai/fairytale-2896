const mapping: Record<string, string> = {
  appointments: 'appointment',
  inventories: 'inventory',
  patients: 'patient',
  practices: 'practice',
  'treatment-plans': 'treatment_plan',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
