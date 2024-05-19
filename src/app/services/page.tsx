import Services from '@/components/services/Services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'The best law firm on the earth',
};

const page = () => {
  return (
    <div>
      <Services />
    </div>
  );
};
export default page;
