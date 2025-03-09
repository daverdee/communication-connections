
export interface Manual {
  id: string;
  title: string;
  author: string;
  pages: number;
  price: number;
  description: string;
  details: string[];
}

export const manuals: Manual[] = [
  {
    id: "manual1",
    title: "Programs & Documentation for Successful Implementation",
    author: "Sharron J. Brigham",
    pages: 124,
    price: 89.99,
    description: "A complete reference guide and resource guideline in support of Restorative Therapy principles.",
    details: [
      "Intended for facilitators and administrators",
      "Focuses on maintaining a quality lifestyle for seniors",
      "Comprehensive selection of workshops",
      "Defines a balanced approach towards seniors care"
    ]
  },
  {
    id: "manual2",
    title: "Recreation and Leisure in Long Term Care",
    author: "Communication Connections",
    pages: 96,
    price: 59.99,
    description: "Written for Recreation and Leisure Care services in Long Term Care.",
    details: [
      "Understanding of Ministry requirements",
      "Knowledge of policy, procedures and job descriptions",
      "Enhanced program suggestions",
      "Detailed understanding of assessments and evaluations",
      "Guidelines for volunteer teams",
      "Team building techniques",
      "Palliative care resources",
      "Positive connections to family councils"
    ]
  },
  {
    id: "manual3",
    title: "PSW Restorative Therapy Basic Training - 1 day workshop",
    author: "Communication Connections",
    pages: 45,
    price: 39.99,
    description: "Workshop for PSW's working with a 'Restorative Therapy Approach' for seniors facing physical health challenges.",
    details: [
      "Mobility, transfers, and balance and fall prevention",
      "Communication techniques and restorative dining",
      "Activities of Daily Living (ADL's)",
      "8 hour attendance certificate",
      "Solution-oriented approach to health challenges",
      "Techniques for revitalizing hope and meaningful living",
      "Team building and multi-disciplinary support methods"
    ]
  }
];
