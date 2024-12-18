import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">お問い合わせ</h1>
      <ContactForm />
    </div>
  );
}