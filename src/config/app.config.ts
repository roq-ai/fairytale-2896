interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Dentist Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Dentist Owner', 'Dental Staff', 'Inventory Manager', 'Customer Support'],
  tenantName: 'Practice',
  applicationName: 'FairyTale',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Interact with the practice.'],
  ownerAbilities: [
    'Manage patient health records',
    'Send automated reminders to patients',
    'Handle all billing and invoicing operations',
    'Provide tele-dentistry services',
  ],
};
