interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Member'],
  customerRoles: ['Visitor'],
  tenantRoles: ['Member'],
  tenantName: 'Individual',
  applicationName: 'old school chat',
  addOns: ['chat', 'notifications'],
};
