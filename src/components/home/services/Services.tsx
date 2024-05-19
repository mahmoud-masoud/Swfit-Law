import Wrapper from '@/components/ui/Wrapper';
import ServiceCard from './ServiceCard';
import Link from 'next/link';
import Company from '@/assets/icons/Company';
import Shield from '@/assets/icons/Shield';
import Family from '@/assets/icons/Family';

const Services = () => {
  return (
    <section className='bg-light-gold py-10'>
      <Wrapper>
        <h2 className='font-serif text-4xl mb-10 text-primary'>
          Our Expertise
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-6'>
          <ServiceCard
            path='legal-compliance'
            title='Legal Compliance'
            description='Ensure your business adheres to all relevant laws and regulations with our expert legal compliance services.'
            icon={<Shield />}
          />
          <ServiceCard
            path='company-incorporation'
            title='Company Incorporation'
            description='Simplify the process of starting your business with our company incorporation services.'
            icon={<Company />}
          />
          <ServiceCard
            path='family-law'
            title='Family Law'
            description='Our family law services encompass divorce, child custody, adoption, prenuptial agreements, and estate planning.'
            icon={<Family />}
          />
        </div>
        <div className='flex justify-end'>
          <Link
            href={'/services'}
            className='inline-block mt-4 hover:underline text-lg ml-auto'
          >
            View all
          </Link>
        </div>
      </Wrapper>
    </section>
  );
};
export default Services;
