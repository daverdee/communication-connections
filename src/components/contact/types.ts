
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  interest: "organization" | "individual" | "personal";
  hasHealthcareBackground: "yes" | "no";
  comments: string;
}
