import ServicesPage from '@/components/services/ServicePage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Service',
  description: 'The best law firm on the earth',
};

const page = ({ params }: { params: { service: string } }) => {
  const slug = params.service;
  return <ServicesPage slug={slug} />;
};
export default page;
