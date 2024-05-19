import About from '@/components/about/About';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'The best law firm on the earth',
};

const page = () => {
  return <About />;
};
export default page;
