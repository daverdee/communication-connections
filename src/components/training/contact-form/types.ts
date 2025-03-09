
export interface FormData {
  name: string;
  phone: string;
  email: string;
  interest: string;
  hasHealthcareBackground: string;
  comments: string;
}

export interface ContactFormDialogProps {
  trigger: React.ReactNode;
  initialComments?: string;
}
