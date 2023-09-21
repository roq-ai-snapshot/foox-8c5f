interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Owner', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage their own freelancer profile',
    'Apply to jobs',
    'Log work hours',
    'Update application status',
  ],
  ownerAbilities: [
    'Manage the hiring process',
    'Manage freelancer profiles',
    'Manage worklogs',
    'Manage company and job information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/5618ab52-8a3b-416c-9de8-4db522512993',
};
