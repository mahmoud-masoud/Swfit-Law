import ServicesPage from '@/components/services/ServicePage';

const page = ({ params }: { params: { service: string } }) => {
  const slug = params.service;
  return <ServicesPage slug={slug} />;
};
export default page;
