import ContactWrapper from '@/components/contact/ContactWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'The best law firm on the earth',
};

const page = () => {
  return (
    <div>
      <ContactWrapper />
    </div>
  );
};
export default page;
