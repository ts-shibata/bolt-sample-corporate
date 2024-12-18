export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  type: 'general' | 'business' | 'recruitment' | 'other';
  message: string;
}