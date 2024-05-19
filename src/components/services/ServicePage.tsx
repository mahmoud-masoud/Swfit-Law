import data from '@/servicesData.json';
import Wrapper from '../ui/Wrapper';
const ServicePage = ({ slug }: { slug: string }) => {
  const serviceIndex = data.findIndex((item) => slug === item['service-slug']);
  const serviceData = data[serviceIndex];

  return (
    <section className=' py-10 md:pb-20 relative'>
      <Wrapper className='max-md:p-0'>
        <div className='mb-10 bg-primary text-white px-4 py-8  md:px-8 md:rounded-lg sticky  '>
          <h1 className='text-4xl font-serif mb-6 '>
            {serviceData['service-title']}
          </h1>
          <p className='leading-6'>{serviceData['service-description']}</p>
        </div>
        <ol className='p-2 list-inside list-decimal max-w-screen-md'>
          {serviceData['services-list'].map((serviceItem, i) => {
            return (
              <li key={i} className='mb-8'>
                <span className='text-primary text-2xl font-medium inline-block mb-3'>
                  {serviceItem.title}
                </span>
                <p className='pl-3'>{serviceItem.description}</p>
              </li>
            );
          })}
        </ol>
      </Wrapper>
    </section>
  );
};
export default ServicePage;
