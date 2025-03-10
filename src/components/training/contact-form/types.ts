
export interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: "organization" | "individual" | "personal";
  hasHealthcareBackground: "yes" | "no";
  comments: string;
}

export interface ContactFormDialogProps {
  trigger: React.ReactNode;
  initialComments?: string;
}
