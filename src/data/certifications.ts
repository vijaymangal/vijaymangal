export interface CertificationGroup {
  id: string
  title: string
  certifications: string[]
}

export const certificationGroups: CertificationGroup[] = [
  {
    id: 'ux',
    title: 'UX & Design',
    certifications: ['Google UX Design Professional Certificate'],
  },
  {
    id: 'scrum',
    title: 'Agile & Scrum',
    certifications: ['Certified Scrum Product Owner (CSPO)', 'Certified Scrum Master (CSM)'],
  },
  {
    id: 'salesforce',
    title: 'Salesforce',
    certifications: [
      'Salesforce Certified AI Associate',
      'Salesforce Certified Platform App Builder',
      'Salesforce Certified Administrator',
      'Salesforce Certified Platform Developer I',
    ],
  },
]

export const certifications = certificationGroups.flatMap((group) => group.certifications)

export const awards = ['Applause Awards (7×) — Deloitte']
